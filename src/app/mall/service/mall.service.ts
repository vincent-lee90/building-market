import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {AppDialogService} from '../../share/myDialog/app-alert/app-dialog.service'
@Injectable()
export class MallService {
  constructor(private http: Http, private appDialogService: AppDialogService) {
  }

  private getHotWordsUrl = 'mall/hotWords';

  getHotWords() {
    return this.http.get(this.getHotWordsUrl)
      .map((res: Response) => {
          return res.json()
        }
      ).subscribe(data => {
        if (data.statusCode != 200) {
          this.appDialogService.setAlert(data.message)
        }
        return data.body;
      })
  }
}
