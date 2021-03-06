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
  public hasGot = false;

  constructor(private route: ActivatedRoute, private mallService: MallService) {
  }

  getList() {
    let paramsObj={
      "searchStr":this.route.snapshot.queryParams['searchStr'],
      "catCode":this.route.snapshot.queryParams['catCode']
    };
    this.mallService.getProducts(paramsObj)
      .subscribe(data => {
        this.productList = data;
        this.hasGot = true;
      }, err => {
        this.hasGot = true;
      });
  }

  getListByCode(code: string) {
    let paramsObj = {catCode: code};
    this.mallService.getProducts(paramsObj)
      .subscribe(data => this.productList = data)
  }

  ngOnInit() {
    this.getList();
  }
}
