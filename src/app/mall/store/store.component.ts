import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {MallService} from "../service/mall.service";
@Component({
  selector: "store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.less"]
})
export class StoreComponent implements OnInit {
  private storeInfo:StoreInfo = {};

  constructor(private route: ActivatedRoute, private  mallService: MallService) {

  }

  getStoreInfo() {
    this.route.params.switchMap((params: Params) => {
      return this.mallService.getStoreInfo(params['storeCode'])
    }).subscribe(data => {
      this.storeInfo = data;
    })
  }

  ngOnInit() {
    this.getStoreInfo();
  }
}
