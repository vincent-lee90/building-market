import {Component,OnInit,Output,EventEmitter} from '@angular/core';
@Component({
  selector:'mall-category',
  templateUrl:'./mall-category.component.html',
  styleUrls:['./mall-category.component.less']
})
export class MallCategoryComponent implements OnInit{
  isShowCategories=false;
  @Output() onSelect=new EventEmitter<string>();
  constructor(){

  }
  select(code:string){
    this.onSelect.emit(code);
  }
  showCategories(){
    this.isShowCategories=!this.isShowCategories;
  }
  ngOnInit(){

  }
}
