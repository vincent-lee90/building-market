import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.less'],
})
export class UploadImgComponent implements OnInit {
  frontIdCardUrl = "";
  backIdCardUrl = "";

  constructor(private mineService: MineService, private router: Router, private route: ActivatedRoute) {
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

  finish() {
    this.mineService.uploadInfo(this.frontIdCardUrl, this.backIdCardUrl)
      .subscribe(data => {
        this.router.navigate(['/mine']);
      });
  }

  ngOnInit() {

  }
}
