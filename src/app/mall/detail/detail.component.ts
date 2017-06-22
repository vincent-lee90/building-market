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
  constructor(private mallService:MallService,private route:ActivatedRoute){}
  getProductDetail(){
    this.route.params.switchMap((params:Params)=>{
      return this.mallService.getProductById(params["id"])
    }).subscribe(data=>{
      console.log(1);
    })
  }
  ngOnInit(){
    this.getProductDetail()
  }
}
