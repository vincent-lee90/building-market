import {Component,OnInit} from "@angular/core";
import {AppDialogService} from '../share/myDialog/app-alert/app-dialog.service';
@Component({
  selector:'index',
  templateUrl:'./index.component.html',
  styleUrls:['./index.component.less']
})
export class IndexComponent implements OnInit{
  constructor(private appDialogService:AppDialogService){
  }
  ngOnInit(){
    this.appDialogService.getAlert("1234");
  }
}
