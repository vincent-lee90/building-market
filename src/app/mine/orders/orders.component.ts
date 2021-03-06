import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MineService} from "../service/mine.service";
import {Order} from "../../mall/model/order.model";

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] = [];
  public hasGot = false;

  constructor(private route: ActivatedRoute, private mineService: MineService) {
  }

  getOrdersByStatus() {
    this.route.params.subscribe((params: Params) => {
      return this.mineService.getOrdersByStatus(params['orderStatus']).subscribe(data => {
        this.orders = data;
        this.hasGot = true;
      }, err => {
        this.hasGot = true;
      })
    })
  }

  ngOnInit() {
    this.getOrdersByStatus()
  }
}
