import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {MallService} from '../service/mall.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  product = {};
  amount = "1";
  params = {};

  constructor(private mallService: MallService, private route: ActivatedRoute,private router:Router) {
  }

  getProductDetail() {
    this.route.params.switchMap((params: Params) => {
      this.params = params;
      return this.mallService.getProductById(params["id"])
    }).subscribe(data => {
      this.product = data;
    })
  }

  selectAmount(amount) {
    this.amount = amount;
  }

  toConfirm() {
    this.router.navigate(['../confirm-order',this.params['id'],this.amount])
  }

  ngOnInit() {
    this.getProductDetail()
  }
}
