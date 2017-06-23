import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {MallService} from '../service/mall.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector:'detail',
  templateUrl:'./detail.component.html',
  styleUrls:['./detail.component.less']
})
export class DetailComponent implements OnInit{
  product={};
  amount="";
  constructor(private mallService:MallService,private route:ActivatedRoute){}
  getProductDetail(){
    this.route.params.switchMap((params:Params)=>{
      return this.mallService.getProductById(params["id"])
    }).subscribe(data=>{
      this.product=data;
    })
  }
  selectAmount(amount){
    this.amount=amount;
  }
  ngOnInit(){
    this.getProductDetail()
  }
}
