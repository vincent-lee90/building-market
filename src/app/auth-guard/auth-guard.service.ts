import {Injectable} from '@angular/core';
@Injectable()
export class AuthGuardService{
  public isLogin:boolean=false;
  public redirectUrl:string="";
  constructor(){
  }
}
