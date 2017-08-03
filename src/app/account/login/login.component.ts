import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {User} from '../model/user-model';
import {AccountService} from '../services/account.service';
import {AuthGuardService} from '../../auth-guard/auth-guard.service';
import {AppDialogService} from "../../share/myDialog/app-alert/app-dialog.service";
import {CommonService} from "../../service/common.service";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(private accountService: AccountService, private authService: AuthGuardService, private router: Router, private appDialogService: AppDialogService,private commonService:CommonService) {

  }

  login() {
    this.accountService.login(this.user)
      .subscribe(data => {
        if (data.statusCode == 200) {
          this.commonService.user=data.body;
          this.authService.isLogin = true;
          this.router.navigate([this.authService.redirectUrl]);
        } else {
          this.appDialogService.setAlert(data.message);
        }
      });
  }

  ngOnInit() {
  }
}
