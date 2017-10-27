import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
import {Product} from "../../../mall/model/product.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AppDialogService} from "../../../share/myDialog/app-alert/app-dialog.service";
@Component({
  selector: 'edit-product',
  templateUrl: "./edit-product.component.html",
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit {
  public myStoreInfo = {};
  public product: Product = {
    product_name: "",
    product_intro: "",
    product_logo: "",
    current_price: "",
    origin_price: "",
    product_cat: "",
    store_code: ""
  };
  public logoImgUrl: string;
  public detailImgUrl: Array<string> = [];

  constructor(private mineService: MineService, private route: ActivatedRoute, private router: Router, private appDialogService: AppDialogService) {
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

  getUploadImgInfo(res, type) {
    if (res.statusCode === 200) {
      if (type === 'logo') {
        this.logoImgUrl = res.body;
      } else if (type === 'detail') {
        this.detailImgUrl.push(res.body);
      }
    }
  }

  validate(f: NgForm) {
    if (f.form.controls['productName'].invalid) {
      this.appDialogService.setAlert('请填入产品名称');
      return
    }
    if (f.form.controls['productIntro'].invalid) {
      this.appDialogService.setAlert('请填入产品简介');
      return
    }
    if (f.form.controls['originPrice'].invalid) {
      this.appDialogService.setAlert('请填入产品原价');
      return
    }
    if (f.form.controls['currentPrice'].invalid) {
      this.appDialogService.setAlert('请填入产品活动价');
      return
    }
    if (!this.product.product_cat) {
      this.appDialogService.setAlert('请选择产品类型');
      return
    }
    if (!this.logoImgUrl) {
      this.appDialogService.setAlert('请上传产品头像');
      return;
    }
    if (this.detailImgUrl.length < 3) {
      this.appDialogService.setAlert('请上传产品详情图,至少3张，最多6张');
      return;
    }
  }

  createProduct(f) {
    this.product.product_detail = this.detailImgUrl.join(",");
    this.mineService.createProduct(this.product)
      .subscribe(data => {
        this.appDialogService.setAlert("产品添加成功");
        this.router.navigate(["/mine"], {relativeTo: this.route})
      })
  }

  confirm(f: NgForm) {
    this.validate(f);
    this.createProduct(f);
  }

  ngOnInit() {
    this.myStoreInfo = this.mineService.myStoreInfo;
    this.getProductByProductCode();
  }
}
