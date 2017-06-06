import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class AppDialogService{
  private alertSource=new Subject<string>();
  alertContentGot$=this.alertSource.asObservable();
  setAlert(alertContent:string){
    this.alertSource.next(alertContent);
  }
}
