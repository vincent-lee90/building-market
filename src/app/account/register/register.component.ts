import {Component} from '@angular/core';
import {User} from '../model/user-model';
import {AccountService} from '../services/account.service';
import {AuthGuardService} from '../../auth-guard/auth-guard.service';
import {Router} from '@angular/router';
import {AppDialogService} from "../../share/myDialog/app-alert/app-dialog.service";
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers: [AccountService]
})
export class RegisterComponent {
  public user = new User();

  constructor(private accountService: AccountService, private authService: AuthGuardService, private router: Router, private appDialogService: AppDialogService) {
  }
  register(rePassword) {
    if(!this.user.password){
      this.appDialogService.setAlert("请输入密码");
      return;
    }
    if(!rePassword){
      this.appDialogService.setAlert("请确认密码");
      return;
    }
    if (this.user.password !== rePassword) {
      this.appDialogService.setAlert("两次密码输入不一致");
      return;
    }
    this.accountService.register(this.user)
      .subscribe(data => {
        if (data.statusCode == 200) {
          this.appDialogService.setAlert("注册成功");
          this.authService.isLogin = true;
        } else {
          this.appDialogService.setAlert("注册失败了");
        }
        this.router.navigate([this.authService.redirectUrl]);
      });
  }
}
