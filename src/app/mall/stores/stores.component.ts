import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector:"stores",
  templateUrl:"./stores.component.html",
  styleUrls:["./stores.component.less"]
})
export class StoresComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    console.log(this.route.params);
  }
}
