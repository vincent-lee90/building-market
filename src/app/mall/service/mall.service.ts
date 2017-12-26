import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service';
import 'rxjs/add/operator/map';
import {Order} from "../model/order.model";
import {Product} from "../model/product.model";
import {HttpClient, HttpParams} from "@angular/common/http";
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
          if (res.statusCode !== '200') {
            this.appDialogService.setAlert(res.message)
          }
          return res.body;
        }
      )
  }

  getProducts(paramsObj) {
    let myParams={"searchStr":paramsObj["searchStr"],"catCode":paramsObj["catCode"]};
/*    let params= new HttpParams()
      .set("searchStr",paramsObj["searchStr"])
      .set("catCode",paramsObj["catCode"]);*/
    return this.http.get<MyResponse>(this.getProductListUrl,{params:myParams})
      .map(res=>{
        if (res.statusCode !== '200') {
          this.appDialogService.setAlert(res.message)
        }
        return res.body;
      })
  }

  getProductById(id) {
    return this.http.get<MyResponse>(this.getProductByIdUrl, {params:{'id':id}})
      .map((res) => {
        if (res.statusCode !== '200') {
          this.appDialogService.setAlert(res.message)
        }
        return res.body;
      })
  }

  getCategories() {
    return this.http.get<MyResponse>(this.getCategoriesUrl)
      .map((res) => {
        if (res.statusCode !== '200') {
          this.appDialogService.setAlert(res.message)
        }
        return res.body;
      })
  }

  getStoreInfo(storeCode) {
    let params: HttpParams;
    storeCode&&params.append("storeCode",storeCode);
    return this.http.get<MyResponse>(this.getStoreInfoUrl,{params:params})
      .map((res) => {
        if (res.statusCode !== '200') {
          this.appDialogService.setAlert(res.message)
        }
        return res.body;
      })
  }

  createOrder(order: Order) {
    let params = new URLSearchParams();
    params.append('product_id', order.product_id);
    params.append('product_name', order.product_name);
    params.append('amount', order.amount);
    params.append('price', order.price);
    params.append('user_id', order.user_id);
    params.append('store_code', order.store_code);
    return this.http.post(this.createOrderUrl, params)
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }
}

