import {Component,OnInit} from '@angular/core';
import {CommonService} from "../../service/common.service";
import {User} from "../../account/model/user-model";
import {AuthGuardService} from "../../auth-guard/auth-guard.service";
@Component({
  selector:'mine',
  templateUrl:'./mine.component.html',
  styleUrls:['./mine.component.less']
})
export class MineComponent implements OnInit{
  private user:User=new User();
  private isLogin=this.authGuard.isLogin;
  constructor(private commonService:CommonService,private authGuard:AuthGuardService){

  }
  getUserInfo(){
    if(this.commonService.user.role){
      this.user=this.commonService.user;
    }else{
      this.user.role="游客";
    }
  }
  ngOnInit(){
    this.getUserInfo();
  }
}
