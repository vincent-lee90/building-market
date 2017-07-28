import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MineService} from "../service/mine.service";
import {Order} from "../../mall/model/order.model";

@Component({
  selector:'orders',
  templateUrl:'./orders.component.html',
  styleUrls:['./orders.component.less']
})
export class OrdersComponent implements OnInit{
  private orders:Order[]=[];
  private current_tab='';
  constructor(private route:ActivatedRoute,private mineService:MineService){}
  getOrdersByStatus(){
    this.route.params.switchMap((params:Params)=>{
      this.current_tab=params['orderStatus'];
      console.log(1);
       return this.mineService.getOrdersByStatus(this.current_tab)
    }).subscribe(data=>{
      this.orders=data;
    })
  }
  changeTab(tab){

  }
  ngOnInit(){
    this.getOrdersByStatus()
  }
}
