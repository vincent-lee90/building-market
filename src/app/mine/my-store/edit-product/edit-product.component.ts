import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
@Component({
  selector:'edit-product',
  templateUrl:"./edit-product.component.html",
  styleUrls:['./edit-product.component.less']
})
export class EditProductComponent implements OnInit{
  constructor(private mineService:MineService){}
  public myStoreInfo={};
  getProduct(){

  }
  ngOnInit(){
    this.myStoreInfo=this.mineService.myStoreInfo;
    this.getProduct();
  }
}
