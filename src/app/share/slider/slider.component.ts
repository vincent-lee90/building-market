import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input} from "@angular/core";
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ["./slider.component.less"]
})
export class SliderComponent implements AfterViewInit {
  @Input() imgSrcArr: Array<string> = [];
  timer;
  constructor() {
  }

  getNext(direction?: string) {
    direction = direction || 'next';
    let items = document.querySelectorAll('.slider-item'), nextItem;
    for (let i = 0, length = items.length; i < length; i++) {
      if (items[i].className.indexOf('slider-item-active') > -1) {
        if (direction === 'next') {
          nextItem = items[i + 1] || items[0]
        } else {
          nextItem = items[i - 1] || items[length - 1]
        }
        break;
      }
    }
    return nextItem;
  }

  goNext() {
    let $prev = document.querySelector('.slider-item-active');
    let $next = this.getNext();
    if ($prev && $next) {
      $prev.className = 'slider-item';
      $next.className = 'slider-item slider-item-active';
    }

  }

  goPrev() {

  }

  autoPlay() {
    let $nextItem: any;
    this.initActivateItem();
    this.timer=setInterval(() => {
      console.log(new Date());
      this.goNext()
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
  ngAfterViewInit(){
    this.autoPlay()
  }
}
