import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.less'],
})
export class UploadImgComponent implements OnInit {
  frontIdCardUrl = "";
  backIdCardUrl = "";

  constructor() {
  }

  getUploadImgInfo(res, type) {
    if (res.statusCode === 200) {
      if (type === 'front') {
        this.frontIdCardUrl = res.body;
      } else if (type === 'back') {
        this.backIdCardUrl = res.body;
      }
    }
  }

  ngOnInit() {

  }
}
