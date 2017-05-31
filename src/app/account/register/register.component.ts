import {Component} from '@angular/core';
import {User} from '../model/user-model';
import {AccountService} from '../services/account.service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers: [AccountService]
})
export class RegisterComponent {
  public user = new User();

  constructor(private accountService: AccountService) {
  }

  register(rePassword) {
    if(this.user.password!==rePassword){
      return;
    }
    this.accountService.register(this.user)
      .subscribe(data => console.log(data));
  }
}
