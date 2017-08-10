import {Component,OnInit} from '@angular/core';
@Component({
  selector:'base-info',
  templateUrl:'base-info.component.html',
  styleUrls:['./base-info.component.less']
})
export class BaseInfoComponent implements OnInit{
  constructor(){}
  toStoreInfo(template){
    console.log(template.form)
  }
  ngOnInit(){

  }
}
