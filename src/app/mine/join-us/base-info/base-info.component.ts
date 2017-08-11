import {Component,OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector:'base-info',
  templateUrl:'base-info.component.html',
  styleUrls:['./base-info.component.less']
})
export class BaseInfoComponent implements OnInit{
  public name="";
  constructor(){}
  toStoreInfo(f:NgForm){
    console.log(f.valid);
  }
  ngOnInit(){

  }
}
