import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'store-display',
  templateUrl: "./store-display.component.html",
  styleUrls: ['./store-display.component.less']
})
export class StoreDisplayComponent implements OnInit {
  public productList = [];

  constructor(private mineService: MineService, private route: ActivatedRoute) {
  }

  getProductsByStoreCode() {
    this.route.params.switchMap((params: Params) => {
      return this.mineService.getProductsByStoreCode(params['orderCode'])
    }).subscribe(data => {
      this.productList = data
    });
  }

  ngOnInit() {
    this.getProductsByStoreCode();
  }
}
