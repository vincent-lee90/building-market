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
  private getProductListByCatCodeUrl = 'mall/productsByCatCode';
  private getProductListBySearch = 'mall/productBySearch';

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

  getProducts(search,catCode) {
    let params=new URLSearchParams();
    if(search){
      params.set('search',search)
    }
    if(catCode){
      params.set('catCode',catCode);
    }
    return this.http.get(this.getProductListUrl,{search:params})
      .map((res: Response) => {
        let _res = res.json();
        if (_res.statusCode != 200) {
          this.appDialogService.setAlert(_res.message)
        }
        return _res.body;
      })
  }
}
