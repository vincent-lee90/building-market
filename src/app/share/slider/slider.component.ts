import {AfterContentChecked, AfterContentInit, Component, Input} from "@angular/core";
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ["./slider.component.less"]
})
export class SliderComponent implements AfterContentChecked {
  @Input() imgSrcArr: Array<string> = [];

  constructor() {
  }

  getNext() {

  }
  autoPlay() {

  }

  stopPlay() {

  }

  activateItem() {
    let firstSlider = document.querySelector("#slider0");
    if (firstSlider) {
      let classNameTemp = firstSlider.className;
      classNameTemp += "slider-item-active";
      firstSlider.className = classNameTemp;
    }
  }
  ngAfterContentChecked() {
    this.activateItem()
  }
}
