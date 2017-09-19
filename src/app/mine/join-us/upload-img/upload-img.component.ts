import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
@Component({
  selector: 'upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.less'],
})
export class UploadImgComponent implements OnInit {
  frontIdCardUrl = "";
  backIdCardUrl = "";

  constructor(private mineService:MineService) {
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
  finish(){
    this.mineService.uploadStoreInfoImg(this.frontIdCardUrl,this.backIdCardUrl);
  }
  ngOnInit() {

  }
}
