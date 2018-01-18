import {Injectable} from '@angular/core';
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service';
import 'rxjs/add/operator/map';
import {CommonService} from '../../service/common.service';
import {Product} from '../../mall/model/product.model';
import {StoreInfo} from '../../mall/model/store.model';
import {HttpClient} from '@angular/common/http';
import {MyResponse} from '../../interfaces/response';

@Injectable()
export class MineService {
  constructor(private http: HttpClient, private appDialogService: AppDialogService, private commonService: CommonService) {
  }

  private getOrderUrl = 'order/getOrder';
  private getOrdersByStatusUrl = 'order/getOrders';
  private uploadIdCardImgUrl = 'users/completeInfo';
  private getStoreInfoByUserIdUrl = 'store/getStoreInfoByUserId';
  private getProductsByStoreCodeUrl = 'mall/getProductsByStoreCode';
  private getProductByProductCodeUrl = 'mall/getProductByProductCode';
  private createProductUrl = 'mall/createProduct';
  public user = {};
  public storeInfo = {};//店铺申请信息
  public myStoreInfo: StoreInfo;//我的店铺信息
  getOrderByCode(order_code) {
    let myParams = {'order_code': order_code};
    return this.http.get<MyResponse>(this.getOrderUrl, {params: myParams})
      .map(res => {
        return res.body;
      })
  }

  getOrdersByStatus(order_status) {
    let myParams = {'order_status':order_status, 'user_id': this.commonService.user.id};
    return this.http.get<MyResponse>(this.getOrdersByStatusUrl, {params: myParams})
      .map(res => {
        return res.body;
      })
  }

  uploadInfo(front_id_card_img_url: string, back_id_card_img_url: string) {
    if (!front_id_card_img_url) {
      this.appDialogService.setAlert('请上传身份证正面照');
      return;
    }
    if (!back_id_card_img_url) {
      this.appDialogService.setAlert('请上传身份证反面照');
    }
    let params = {
      user_id: this.commonService.user.id,
      front_id_card_img_url: front_id_card_img_url,
      back_id_card_img_url: back_id_card_img_url,
      real_name: this.user['real_name'],
      telephone: this.user['telephone'],
      store_name: this.storeInfo['store_name'],
      store_addr: this.storeInfo['store_addr'],
      category: this.storeInfo['category']
    };
    return this.http.post<MyResponse>(this.uploadIdCardImgUrl, params)
      .map(res => {
        return res.body;
      })
  }

  setBaseInfo(name: string, telephone: string) {
    this.user['realName'] = name;
    this.user['telephone'] = telephone;
  }

  setStoreInfo(storeName: string, storeAddr: string, category: Array<any>) {
    this.storeInfo['storeName'] = storeName;
    this.storeInfo['storeAddr'] = storeAddr;
    this.storeInfo['category'] = category.join(',');
  }

  public getStoreInfoByUserId() {
    let myParams = {'user_id': this.commonService.user.id};
    return this.http.get<MyResponse>(this.getStoreInfoByUserIdUrl, {params: myParams})
      .map((res) => {
        return res.body;
      })
  }

  getProductsByStoreCode(storeCode) {
    let myParams = {"store_code":storeCode};
    return this.http.get<MyResponse>(this.getProductsByStoreCodeUrl, {params: myParams})
      .map((res) => {
        return res.body
      })
  }

  getProductByProductCode(productCode) {
    let myParams ={"store_code":productCode};
    return this.http.get<MyResponse>(this.getProductByProductCodeUrl, { params:myParams})
      .map((res) => {
        return res.body;
      })
  }

  createProduct(product: Product) {
    let params={
      product_name:product.product_name,
      product_intro:product.product_intro,
      origin_price:product.origin_price,
      current_price:product.current_price,
      product_cat:product.product_cat,
      product_logo:product.product_logo,
      product_detail:product.product_detail,
      store_code:product.store_code
    };
    return this.http.post<MyResponse>(this.createProductUrl, params)
      .map((res) => {
        return res.body;
      })
  }
}
