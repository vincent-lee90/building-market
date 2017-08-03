import {Injectable} from "@angular/core";
import {User} from "../account/model/user-model";
@Injectable()
export class CommonService{
  public user:User=new User();
}
