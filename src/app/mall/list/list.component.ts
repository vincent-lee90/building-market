import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MallService} from '../service/mall.service';
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
    this.mallService.getProducts().subscribe(data => {
      this.productList=data;
    })
  }

  ngOnInit() {
    this.getList()
  }
}
