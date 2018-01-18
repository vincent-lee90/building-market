import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../model/user-model';
import {MyResponse} from '../../interfaces/response';

@Injectable()
export class AccountService {
  public loginUrl = 'users/login';
  public registerUrl = 'users/register';

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    let myParams = {'userName': user.userName, 'password': user.password};
    return this.http
      .get<MyResponse>(this.loginUrl, {params: myParams})
      .map((res) => {
        return res.body;
      });
  }

  register(user: User) {
    let params = {
      userName: user.userName,
      password: user.password
    };
    return this.http.post<MyResponse>(this.registerUrl, params)
      .map((res) => {
        return res.body;
      })
  }
}
