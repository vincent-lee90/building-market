import {Component, OnInit} from '@angular/core';
import {AppDialogService} from '../service/app-dialog.service';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-alert',
  templateUrl: 'app-alert.component.html',
  styleUrls: ['app-alert.component.less'],
  animations: [
    trigger('flyInOut', [
      state('in', style({})),
      transition('void=>*', [
        animate(200, keyframes([
          style({opacity: 0, transform: 'scale(.7)', offset: 0}),
          style({opacity: 1, transform: 'scale(1)',     offset: 1.0})
        ]))
      ]),
      transition('*=>void', [
        animate(200, keyframes([
          style({opacity: 1, transform: 'scale(1)',offset: 0}),
          style({opacity: 0, transform: 'scale(.7)',offset: 1.0})
        ]))
      ])
    ])
  ]
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
