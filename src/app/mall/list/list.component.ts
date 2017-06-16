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
 /*   this.route.queryParams.switchMap((params:Params)=>{
      return this.mallService.getProducts(params['search'])
    });
    this.mallService.getProducts().subscribe(data => {
      this.productList=data;
    })*/
  }

  ngOnInit() {
    this.getList()
  }
}
