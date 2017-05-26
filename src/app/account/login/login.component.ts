import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {User} from '../model/user-model';
import {AccountService} from '../services/account.service';
import {AuthGuardService} from '../../auth-guard/auth-guard.service';
@Component({
  selector:'login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.less'],
  providers:[AccountService]
})
export class LoginComponent implements OnInit{
  public user:User=new User();
  constructor(private accountService:AccountService,private authService:AuthGuardService,private router:Router){

  }
  login(){
    this.accountService.login(this.user)
      .subscribe(data=>{
        if(data.statusCode==200){
          this.authService.isLogin=true;
          this.router.navigate([this.authService.redirectUrl]);
        }
      });
  }
  ngOnInit(){
  }
}
