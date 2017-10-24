import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
import {Product} from "../../../mall/model/product.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
  selector: 'edit-product',
  templateUrl: "./edit-product.component.html",
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit {
  public myStoreInfo = {};
  public product: Product;

  constructor(private mineService: MineService, private route: ActivatedRoute, private router: Router) {
  }

  getProductByProductCode() {
    const productCode = this.route.snapshot.params['productCode'];
    if (productCode) {
      this.mineService.getProductByProductCode(productCode)
        .subscribe(data => {
          this.product = data;
        })
    }
  }

  ngOnInit() {
    this.myStoreInfo = this.mineService.myStoreInfo;
    this.getProductByProductCode();
  }
}
