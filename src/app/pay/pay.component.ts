import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MineService} from '../mine/service/mine.service';
import {Order} from "../mall/model/order.model";

@Component({
  selector: 'pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.less'],
  providers: [MineService]

})
export class PayComponent implements OnInit {
  private order: Order = new Order();
  private order_code=this.route.snapshot.params['orderCode'];
  constructor(private mineService: MineService, private route: ActivatedRoute) {
  }

  getOrder() {

    this.mineService.getOrderByCode(this.order_code)
      .subscribe(data => {
        this.order = data;
      })
  }

  ngOnInit() {
    this.getOrder()
  }
}
