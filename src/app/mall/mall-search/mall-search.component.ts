import {Component,OnInit} from '@angular/core';
import {MallService} from '../service/mall.service';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector:'mall-search',
  templateUrl:"./mall-search.component.html",
  styleUrls:['./mall-search.component.less']
})
export class MallSearchComponent implements OnInit{
  public  hotWords=[];
  public searchText="";
  constructor(private mallService:MallService,private router:Router,private route:ActivatedRoute){}
  getHotWords(){
    this.mallService.getHotWords().subscribe(data=>{
      this.hotWords=data;
    });
  }
  toSearch(e,text){
    e.preventDefault();
    this.router.navigate(['../list'],{relativeTo:this.route,queryParams:{searchStr:text}})
  }
  ngOnInit(){
    this.getHotWords();
  }
}
