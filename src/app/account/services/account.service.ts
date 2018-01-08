import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from '@angular/http';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../model/user-model';
@Injectable()
export class AccountService {
  public loginUrl = 'users/login';
  public registerUrl = 'users/register';

  constructor(private http: Http,private httpClient:HttpClient) {
  }

  login(user: User) {
    let params = new URLSearchParams();
    params.append('userName', user.userName);
    params.append('password', user.password);
    return this.http
      .get(this.loginUrl, {search: params})
      .map((res: Response) => {
        return res.json();
      });
  }

  register(user: User) {
    let params = new URLSearchParams();
    params.append('userName', user.userName);
    params.append('password', user.password);
    return this.http.post(this.registerUrl,params)
      .map((res: Response) => {
        return res.json()
      })
  }
}
