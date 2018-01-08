import {AfterViewInit, Component, ElementRef, Input, OnDestroy} from "@angular/core";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ["./slider.component.less"]
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  @Input() imgSrcArr: Array<string> = [];
  timer;

  constructor(el: ElementRef) {
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
    $next.offsetWidth;//force reflow
    if ($active && $next) {
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
    $next.offsetWidth;
    if ($active && $next) {
      $active.className += 'next';
      $next.className += 'right';
      $next.addEventListener('webkitTransitionEnd', function () {
        $next.className = 'slider-item slider-item-active';
      });
      $active.addEventListener('webkitTransitionEnd', function () {
        $active.className = 'slider-item';
      })
    }
  }

  autoPlay() {
    this.initActivateItem();
    if (this.imgSrcArr.length < 2) {
      return;
    }
    this.timer = setInterval(() => {
      this.goPrev()
    }, 5000)
  }

  stopPlay() {

  }

  initActivateItem() {
    let firstSlider = document.querySelector(".slider-item");
    if (firstSlider) {
      let classNameTemp = firstSlider.className;
      classNameTemp += " slider-item-active";
      firstSlider.className = classNameTemp;
    }
  }

  ngAfterViewInit() {
    this.autoPlay()
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
