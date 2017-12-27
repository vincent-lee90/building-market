import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {AppDialogService} from "../share/myDialog/app-alert/app-dialog.service";
@Injectable()
export class ResInterceptor implements HttpInterceptor {
  constructor(private appDialogService: AppDialogService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .do(response => {
        if (response instanceof HttpResponse) {
          if (response.body.statusCode !== '200') {
            this.appDialogService.setAlert(response.body.message);
          }
        }
      });
  }
}
