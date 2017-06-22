import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MallService} from "../service/mall.service";
@Component({
  selector: 'mall-category',
  templateUrl: './mall-category.component.html',
  styleUrls: ['./mall-category.component.less']
})
export class MallCategoryComponent implements OnInit {
  categories = [];
  isShowCategories = false;
  @Output() onSelect = new EventEmitter<string>();

  constructor(private mallService: MallService) {

  }

  select(code: string) {
    this.onSelect.emit(code);
    this.isShowCategories = false;
  }

  showCategories() {
    this.isShowCategories = !this.isShowCategories;
  }

  getCategories() {
    this.mallService.getCategories()
      .subscribe(data => this.categories = data);
  }

  ngOnInit() {
    this.getCategories()
  }
}
