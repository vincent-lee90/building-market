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
  public myStoreInfo = {};
  public hasGot=false;
  constructor(private mineService: MineService, private route: ActivatedRoute) {
  }
  getProductsByStoreCode() {
    this.route.parent.params.switchMap((params: Params) => {
      return this.mineService.getProductsByStoreCode(params['storeCode'])
    }).subscribe(data => {
      this.hasGot=true;
      this.productList = data
    });
  }
  ngOnInit() {
    this.myStoreInfo=this.mineService.myStoreInfo;
    this.getProductsByStoreCode();

  }
}
