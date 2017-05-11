import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector:'strategy-detail',
  templateUrl:'./strategy-detail.component.html',
  styleUrls:['./strategy-detail.component.less']
})
export class StrategyDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(){
    this.route.params
      .switchMap((params: Params) => {
      return params['id'];
      })
      .subscribe();
  }
}
