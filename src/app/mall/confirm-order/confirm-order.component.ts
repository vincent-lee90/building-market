import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {MallService} from "../service/mall.service";
import {Order} from "../model/order.model";
import {Product} from "../model/product.model";
import {CommonService} from "../../service/common.service";
@Component({
  selector: 'order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.less']
})
export class ConfirmOrderComponent implements OnInit {
  private product: Product = new Product();
  private amount = "";
  public order: Order = new Order();

  constructor(private mallService: MallService,private router:Router,private route:ActivatedRoute,private commonService:CommonService) {

  }

  toPay() {
    this.order.product_id = this.product.id;
    this.order.product_name=this.product.product_name;
    this.order.amount=this.amount;
    this.order.price=this.product.current_price;
    this.order.user_id=this.commonService.user.id;
    this.mallService.createOrder(this.order)
      .subscribe(data=>{
         this.router.navigate(['../../pay',data['order_code']],{relativeTo:this.route})
      })
  }

  ngOnInit() {
    this.product = this.mallService.initialOrder.product;
    this.amount = this.mallService.initialOrder.amount;
  }

}
