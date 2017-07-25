import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service';
import 'rxjs/add/operator/map';
import {Order} from "../model/order.model";
import {Product} from "../model/product.model";

@Injectable()
export class MallService {
  constructor(private http: Http, private appDialogService: AppDialogService) {
  }

  public initialOrder = {
    product: new Product(),
    amount: ""
  };
  private getHotWordsUrl = 'mall/hotWords';
  private getProductListUrl = 'mall/products';
  private getProductByIdUrl = 'mall/product';
  private getCategoriesUrl = 'mall/categories';
  private getStoreInfoUrl = 'mall/store';
  private createOrderUrl = 'order/createOrder';

  getHotWords() {
    return this.http.get(this.getHotWordsUrl)
      .map((res: Response) => {
          let _res = res.json();
          if (_res.statusCode != 200) {
            this.appDialogService.setAlert(_res.message)
          }
          return _res.body;
        }
      )
  }

  getProducts(paramsObj) {
    let params = new URLSearchParams();
    paramsObj["searchStr"] && params.set('searchStr', paramsObj["searchStr"]);
    paramsObj["catCode"] && params.set('catCode', paramsObj["catCode"]);
    return this.http.get(this.getProductListUrl, {search: params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }

  getProductById(id) {
    let params = new URLSearchParams();
    params.set('id', id);
    return this.http.get(this.getProductByIdUrl, {search: params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }

  getCategories() {
    return this.http.get(this.getCategoriesUrl)
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }

  getStoreInfo() {
    return this.http.get(this.getStoreInfoUrl)
      .switchMap((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }

  createOrder(order: Order) {
    let params = new URLSearchParams();
    params.append('product_id', order.product_id);
    params.append('product_name', order.product_name);
    params.append('amount', order.amount);
    params.append('price', order.price);
    /*   params.append('user_id',order.user_id);*/
    return this.http.post(this.createOrderUrl, params)
      .switchMap((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }
}

