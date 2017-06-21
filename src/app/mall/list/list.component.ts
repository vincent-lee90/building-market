import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MallService} from '../service/mall.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public productList = [];

  constructor(private route: ActivatedRoute, private mallService: MallService) {
  }

  getList() {
    this.route.queryParams.switchMap((params: Params) => {
      let paramsObj = {searchStr: params['searchStr'], catCode: params['catCode']};
      return this.mallService.getProducts(paramsObj);
    }).subscribe(data => this.productList = data);
  }

  ngOnInit() {
    this.getList();
  }
}
