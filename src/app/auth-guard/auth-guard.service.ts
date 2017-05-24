import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuardService{
  public isLogin:boolean=false;
  public redirectUrl:string;
  constructor(http:Http){

  }
  private authUrl='';
  login(){
    this.isLogin=true;
  }
  loginout():void{
    this.isLogin=false;
  }
}
