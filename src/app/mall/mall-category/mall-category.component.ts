import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, group, keyframes
} from '@angular/animations';
import {MallService} from "../service/mall.service";

@Component({
  selector: 'mall-category',
  templateUrl: './mall-category.component.html',
  styleUrls: ['./mall-category.component.less'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
<<<<<<< HEAD
      transition(':enter', [style({transform: 'translateX(-100%)'}), animate('200ms ease-in')]),
      transition(':leave',[style({transform:'translateX(-100%)'}),animate('200ms ease-in')])
=======
      transition(':enter', [animate(200, keyframes([
        style({transform: 'translateX(-100%)', offset: 0}),
        style({transform: 'translateX(0)', offset: 1})
      ]))
      ]),
      transition(':leave', [animate(200, keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-100%)', offset: 1})
      ]))
      ])
>>>>>>> 2b7d2d977cee9862cdc84ff01479be2bc421d0c8
    ])
  ]
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
