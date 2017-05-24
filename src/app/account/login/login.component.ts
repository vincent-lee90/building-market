import {Component,OnInit} from '@angular/core';
import {User} from '../model/user-model';
import {AccountService} from '../services/account.service';
@Component({
  selector:'login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.less'],
  providers:[AccountService]
})
export class LoginComponent implements OnInit{
  public user:User=new User();
  constructor(private accountService:AccountService){

  }
  login(){
    this.accountService.login(this.user);
  }
  ngOnInit(){
  }
}
