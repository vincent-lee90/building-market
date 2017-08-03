import {Component,OnInit} from '@angular/core';
import {CommonService} from "../../service/common.service";
import {User} from "../../account/model/user-model";
@Component({
  selector:'mine',
  templateUrl:'./mine.component.html',
  styleUrls:['./mine.component.less']
})
export class MineComponent implements OnInit{
  private user:User=new User();
  constructor(private commonService:CommonService){

  }
  getUserInfo(){
    if(this.commonService.user.userName){
      this.user=this.commonService.user;
    }else{
      this.user.userName="游客";
    }
  }
  ngOnInit(){
    this.getUserInfo();
  }
}
