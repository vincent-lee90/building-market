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
  public newUser = new User();

  constructor(private accountService: AccountService) {
  }

  register() {
    this.accountService.register(this.newUser)
      .subscribe(data => console.log(data));
  }
}
