import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
import {Product} from "../../../mall/model/product.model";
@Component({
  selector:'edit-product',
  templateUrl:"./edit-product.component.html",
  styleUrls:['./edit-product.component.less']
})
export class EditProductComponent implements OnInit{
  public myStoreInfo={};
  public product:Product;
  constructor(private mineService:MineService){}
  getProduct(){

  }
  ngOnInit(){
    this.myStoreInfo=this.mineService.myStoreInfo;
    this.getProduct();
  }
}
