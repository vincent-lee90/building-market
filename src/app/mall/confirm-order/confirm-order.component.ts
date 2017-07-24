import {Component, OnInit} from '@angular/core';
import {MallService} from "../service/mall.service";
import {Order} from "../model/order.model";
@Component({
  selector: 'order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.less']
})
export class ConfirmOrderComponent implements OnInit {
  private product = {};
  private amount = "";
  public order: Order = new Order();

  constructor(private mallService: MallService) {
  }

  toPay() {
    this.mallService.createOrder(this.order)
  }

  ngOnInit() {
    this.product = this.mallService.initialOrder.product;
    this.amount = this.mallService.initialOrder.amount;
  }

}
