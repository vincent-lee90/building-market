import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service';
import 'rxjs/add/operator/map';
@Injectable()
export class MallService {
  constructor(private http: Http, private appDialogService: AppDialogService) {
  }

  private getHotWordsUrl = 'mall/hotWords';
  private getProductListUrl = 'mall/products';
  private getCategoriesUrl = 'mall/categories';

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
}
