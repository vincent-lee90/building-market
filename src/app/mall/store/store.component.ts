import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MallService} from "../service/mall.service";
@Component({
  selector:"store",
  templateUrl:"./store.component.html",
  styleUrls:["./store.component.less"]
})
export class StoreComponent implements OnInit{
  constructor(private route:ActivatedRoute,private  mallService:MallService){

  }
  getStoreInfo(){

  }
  ngOnInit(){

  }
}
