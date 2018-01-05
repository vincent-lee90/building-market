import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../service/common.service";
import {User} from "../../account/model/user-model";
import {AuthGuardService} from "../../auth-guard/auth-guard.service";
import {MineService} from "../service/mine.service";
@Component({
  selector: 'mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.less']
})
export class MineComponent implements OnInit {
  public user: User = new User();
  public myStoreInfo = {};
  public isLogin = this.authGuard.isLogin;

  constructor(private commonService: CommonService, private authGuard: AuthGuardService, private mineService: MineService) {

  }

  getUserInfo() {
    if (this.commonService.user.role) {
      this.user = this.commonService.user;
      if (this.user.role == 'merchant') {
        this.getStoreInfo();
      }
    } else {
      this.user.role = "游客";
    }
  }

  getStoreInfo() {
    this.mineService.getStoreInfoByUserId()
      .subscribe(data => {
        this.myStoreInfo =this.mineService.myStoreInfo=data;
      })
  }

  ngOnInit() {
    this.getUserInfo();
  }
}
