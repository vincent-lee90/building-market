import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service';
import 'rxjs/add/operator/map';
import {CommonService} from "../../service/common.service";
@Injectable()
export class MineService {
  constructor(private http: Http, private appDialogService: AppDialogService, private commonService: CommonService) {
  }

  private getOrderUrl = "order/getOrder";
  private getOrdersByStatusUrl = "order/getOrders";
  private uploadIdCardImgUrl = 'users/completeInfo';
  private getStoreInfoByUserIdUrl = 'store/getStoreInfoByUserId';
  private getProductsByStoreCodeUrl='mall/getProductsByStoreCode';
  private getProductByProductCodeUrl='';
  public user = {};
  public storeInfo = {};//店铺申请信息
  public myStoreInfo={};//我的店铺信息
  getOrderByCode(order_code) {
    let params = new URLSearchParams();
    params.set('order_code', order_code);
    return this.http.get(this.getOrderUrl, {search: params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }
  getOrdersByStatus(order_status) {
    let params = new URLSearchParams();
    params.set('order_status', order_status);
    params.set('user_id', this.commonService.user.id);
    return this.http.get(this.getOrdersByStatusUrl, {search: params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }

  uploadInfo(front_id_card_img_url: string, back_id_card_img_url: string) {
    if (!front_id_card_img_url) {
      this.appDialogService.setAlert('请上传身份证正面照');
      return;
    }
    if (!back_id_card_img_url) {
      this.appDialogService.setAlert("请上传身份证反面照");
    }
    let params = new URLSearchParams();
    params.append('user_id', this.commonService.user.id);
    params.append('front_id_card_img_url', front_id_card_img_url);
    params.append('back_id_card_img_url', back_id_card_img_url);
    params.append('real_name', this.user['realName']);
    params.append('telephone', this.user['telephone']);
    params.append('store_name', this.storeInfo['storeName']);
    params.append('store_addr', this.storeInfo['storeAddr']);
    params.append('category', this.storeInfo['category']);
    return this.http.post(this.uploadIdCardImgUrl, params)
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
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
    let params = new URLSearchParams();
    params.set('user_id', this.commonService.user.id);
    return this.http.get(this.getStoreInfoByUserIdUrl, {search: params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }
  getProductsByStoreCode(storeCode){
    let params=new URLSearchParams();
    params.set('store_code',storeCode);
    return this.http.get(this.getProductsByStoreCodeUrl,{search:params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }
  getProductByProductCode(productCode){
    let params=new URLSearchParams();
    params.set('store_code',productCode);
    return this.http.get(this.getProductByProductCodeUrl,{search:params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }
}
