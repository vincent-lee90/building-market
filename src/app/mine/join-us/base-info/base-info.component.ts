import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppDialogService} from "../../../share/myDialog/app-alert/app-dialog.service";
import {MineService} from "../../service/mine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'base-info',
  templateUrl: 'base-info.component.html',
  styleUrls: ['./base-info.component.less']
})
export class BaseInfoComponent implements OnInit {
  public baseInfo = {};

  constructor(private appDialogService: AppDialogService, private mineService: MineService, private router: Router, private route: ActivatedRoute) {
  }

  toStoreInfo(f: NgForm) {
    if (f.form.controls['name'].invalid) {
      this.appDialogService.setAlert('请填入姓名');
      return
    }
    if (f.form.controls['telephone'].invalid) {
      this.appDialogService.setAlert('请填入手机号');
      return
    }
    this.mineService.setBaseInfo(f.value.name, f.value.telephone);
    this.router.navigate(["../store-info"], {relativeTo: this.route});
  }

  ngOnInit() {

  }
}
