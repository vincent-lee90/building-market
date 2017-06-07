import {Component,OnInit} from "@angular/core";
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service';
@Component({
  selector:'mall',
  templateUrl:'./mall.component.html',
  styleUrls:['./mall.component.less']
})
export class MallComponent implements OnInit{
  constructor(private appDialogService:AppDialogService){
  }
  ngOnInit(){
  }
}
