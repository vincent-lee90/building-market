import {AfterViewInit, Component, HostListener, Input, OnDestroy} from "@angular/core";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ["./slider.component.less"]
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  @Input() imgSrcArr: Array<string> = [];
  timer;
  intervalTime: Number = 5000;
  startX;
  startY;
  endX;
  endY;

  constructor() {
  }

  @HostListener('touchstart', ['$event'])
  getStartXY(e: TouchEvent) {
    this.startX = e.changedTouches[0].pageX;
    this.startY = e.changedTouches[0].pageY;
  }

  @HostListener('touchend', ['$event'])
  getEndXY(e: TouchEvent) {
    e.preventDefault();
    this.endX = e.changedTouches[0].pageX;
    this.endY = e.changedTouches[0].pageY;
    this.getSlideDirect()
  }

  getSlideDirect() {
    let X, Y;
    X = this.endX - this.startX;
    Y = this.endY - this.startY;
    if (Math.abs(X) > Math.abs(Y) && X > 0) {
      console.log('left 2 right');
      this.stopPlay();
      this.goPrev();
      this.autoPlay();
    } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
      console.log('right 2 left');
      this.stopPlay();
      this.goNext();
      this.autoPlay();
    } else if (Math.abs(X) < Math.abs(Y) && Y > 0) {
      console.log('top 2 bottom');
    } else if (Math.abs(X) < Math.abs(Y) && Y < 0) {
      console.log('bottom 2 top');
    } else {
      console.log('just touch')
    }
  }

  getNext(direction?: string) {
    direction = direction || 'next';
    let items = document.querySelectorAll('.slider-item'), nextItem;
    for (let i = 0, length = items.length; i < length; i++) {
      if (items[i].className.indexOf('slider-item-active') > -1) {
        if (direction === 'next') {
          nextItem = items[i + 1] || items[0];
          nextItem.className = 'slider-item next';
        } else {
          nextItem = items[i - 1] || items[length - 1];
          nextItem.className = 'slider-item prev';
        }
        break;
      }
    }
    return nextItem;
  }

  goNext() {
    let $active = document.querySelector('.slider-item-active');
    let $next = this.getNext();
    if ($active && $next) {
      $next.offsetWidth;//force reflow
      $active.className += ' prev';
      $next.className += ' left';
      $next.addEventListener('webkitTransitionEnd', function () {
        $next.className = 'slider-item slider-item-active';
      });
      $active.addEventListener('webkitTransitionEnd', function () {
        $active.className = 'slider-item';
      })
    }
  }

  goPrev() {
    let $active = document.querySelector('.slider-item-active');
    let $next = this.getNext('prev');
    if ($active && $next) {
      $next.offsetWidth;
      $active.className += ' next';
      $next.className += ' right';
      $next.addEventListener('webkitTransitionEnd', function () {
        $next.className = 'slider-item slider-item-active';
      });
      $active.addEventListener('webkitTransitionEnd', function () {
        $active.className = 'slider-item';
      })
    }
  }

  initActivateItem() {
    let firstSlider = document.querySelector(".slider-item");
    if (firstSlider) {
      let classNameTemp = firstSlider.className;
      classNameTemp += " slider-item-active";
      firstSlider.className = classNameTemp;
    }
  }

  startPlay() {
    this.timer = setInterval(() => {
      this.goNext();
    }, this.intervalTime)
  }

  stopPlay() {
    clearInterval(this.timer);
  }

  autoPlay() {
    this.initActivateItem();
    if (this.imgSrcArr.length < 2) {
      return;
    }
    this.startPlay();
  }

  ngAfterViewInit() {
    this.autoPlay()
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
