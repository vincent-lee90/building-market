import {Injectable} from '@angular/core';
import {AppDialogService} from '../../share/myDialog/service/app-dialog.service';
import 'rxjs/add/operator/map';
import {Order} from "../model/order.model";
import {Product} from "../model/product.model";
import {HttpClient} from "@angular/common/http";
import {MyResponse} from "../../interfaces/response";

@Injectable()
export class MallService {
  constructor(private http:HttpClient,private appDialogService: AppDialogService) {
  }

  public initialOrder = {
    product: new Product(),
    amount: ""
  };
  private getHotWordsUrl = 'mall/hotWords';
  private getProductListUrl = 'mall/products';
  private getProductByIdUrl = 'mall/product';
  private getCategoriesUrl = 'mall/categories';
  private getStoreInfoUrl = 'store/getStoreInfo';
  private createOrderUrl = 'order/createOrder';
  private getProductsBySearchText="mall/searchProducts";

  getHotWords() {
    return this.http.get<MyResponse>(this.getHotWordsUrl)
      .map((res) => {
          return res.body;
        }
      )
  }

  getProducts(paramsObj) {
    let myParams={"searchStr":paramsObj["searchStr"],"catCode":paramsObj["catCode"]};
    return this.http.get<MyResponse>(this.getProductListUrl,{params:myParams})
      .map(res=>{
        return res.body;
      })
  }

  getProductById(id) {
    return this.http.get<MyResponse>(this.getProductByIdUrl, {params:{'id':id}})
      .map((res) => {
        return res.body;
      })
  }

  getCategories() {
    return this.http.get<MyResponse>(this.getCategoriesUrl)
      .map((res) => {
        return res.body;
      })
  }

  getStoreInfo(storeCode) {
    return this.http.get<MyResponse>(this.getStoreInfoUrl,{params:{'storeCode':storeCode}})
      .map((res) => {
        return res.body;
      })
  }

  createOrder(order: Order) {
    const params={
      product_id:order.product_id,
      product_name:order.product_name,
      amount:order.amount,
      price:order.price,
      user_id:order.user_id,
      store_code:order.store_code
    };
    return this.http.post<MyResponse>(this.createOrderUrl, params)
      .map((res) => {
        return res.body;
      })
  }
}

