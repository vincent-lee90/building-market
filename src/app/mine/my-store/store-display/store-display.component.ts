import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
@Component({
  selector: 'store-display',
  templateUrl: "./store-display.component.html",
  styleUrls: ['./store-display.component.less']
})
export class StoreDisplayComponent implements OnInit {
  public productList = [];

  constructor(private mineService: MineService) {
  }

  getProductsByStoreCode() {
    this.mineService.getProductsByStoreCode().subscribe(data => {
      this.productList = data
    })
  }

  ngOnInit() {
    this.getProductsByStoreCode();
  }
}
