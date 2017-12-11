import {Component, OnInit} from '@angular/core';
import {AppDialogService} from './app-dialog.service';
@Component({
  selector: 'app-alert',
  templateUrl: 'app-alert.component.html',
  styleUrls: ['app-alert.component.less']
})
export class AppAlertComponent implements OnInit {
  constructor(private appDialogService: AppDialogService) {
  }
  isShowAlert=false;
  alertContent = "";
  ngOnInit() {
    this.appDialogService.alertContentGot$.subscribe(alertContent => {
      this.showAlert(alertContent)
    })
  }
  showAlert(alertContent:string){
    if(this.alertContent){
      return;
    }
    this.isShowAlert=true;
    this.alertContent=alertContent;
    setTimeout(()=>{
      this.alertContent="";
      this.isShowAlert=false;
    },3000)
  }
}
