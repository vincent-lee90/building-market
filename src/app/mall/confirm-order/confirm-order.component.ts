import {Component, OnInit} from '@angular/core';
import {MallService} from "../service/mall.service";
@Component({
  selector: 'order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.less']
})
export class ConfirmOrderComponent implements OnInit {
  private product = {};
  private amount = "";

  constructor(private mallService: MallService) {
  }
  toPay() {

  }

  ngOnInit() {
    this.product = this.mallService.initialOrder.product;
    this.amount = this.mallService.initialOrder.amount;
  }

}
