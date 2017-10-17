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
  public storeInfo = {};
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

  getStoreInfoByStoreCode() {
    this.mineService.getStoreInfoByUserId()
      .subscribe(data=>{
        this.storeInfo=data;
      })
  }

  ngOnInit() {
    this.getProductsByStoreCode();
    this.getStoreInfoByStoreCode();
  }
}
