          import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service';
import 'rxjs/add/operator/map';
import {CommonService} from "../../service/common.service";
@Injectable()
export class MineService {
  constructor(private http: Http, private appDialogService: AppDialogService,private commonService:CommonService) {
  }

  private getOrderUrl = "order/getOrder";
  private getOrdersByStatusUrl = "order/getOrders";

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
}
