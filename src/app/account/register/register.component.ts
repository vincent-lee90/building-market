import {Component} from '@angular/core';
import {User} from '../model/user-model';
import {AccountService} from '../services/account.service';
import {AuthGuardService} from '../../auth-guard/auth-guard.service';
import {Router} from '@angular/router';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers: [AccountService]
})
export class RegisterComponent {
  public user = new User();

  constructor(private accountService: AccountService,private authService:AuthGuardService,private router:Router) {
  }

  register(rePassword) {
    if(this.user.password!==rePassword){
      return;
    }
    this.accountService.register(this.user)
      .subscribe(data => {
        if(data.statusCode==200){
          this.authService.isLogin=true;
          this.router.navigate([this.authService.redirectUrl]);
        }
      });
  }
}
