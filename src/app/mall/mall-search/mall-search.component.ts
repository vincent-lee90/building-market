import {Component,OnInit} from '@angular/core';
import {MallService} from '../service/mall.service';
@Component({
  selector:'mall-search',
  templateUrl:"./mall-search.component.html",
  styleUrls:['./mall-search.component.less']
})
export class MallSearchComponent implements OnInit{
  public  hotWords=[];
  constructor(private mallService:MallService){}
  getHotWords(){
    this.mallService.getHotWords();
  }
  ngOnInit(){
    this.getHotWords();
  }
}
