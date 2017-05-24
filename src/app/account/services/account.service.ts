import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../model/user-model';
@Injectable()
export class AccountService {
  public loginUrl = 'users';

  constructor(private http: Http) {
  }

  login(user: User) {
    return this.http
      .get(this.loginUrl)
      .map((res: Response) => {
        console.log(res);
        return res;
      }).subscribe(data=>{
        console.log(data)
      })
  }
}
