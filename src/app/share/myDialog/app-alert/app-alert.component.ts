import {Component, Input, OnInit} from '@angular/core';
import {AppDialogService} from './app-dialog.service';
@Component({
  selector: 'app-alert',
  templateUrl: 'app-alert.component.html',
  styleUrls: ['app-alert.component.less']
})
export class AppAlertComponent implements OnInit {
  constructor(private appDialogService: AppDialogService) {
  }

  alertContent = "";

  ngOnInit() {
    this.appDialogService.alertContentGot$.subscribe(alertContent => {
      this.alertContent = alertContent
    })
  }
}
