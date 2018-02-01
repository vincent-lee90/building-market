import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";

import {AppDialogService} from "../../../share/myDialog/service/app-dialog.service";
import {MineService} from "../../service/mine.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['store-info.component.less']
})
export class StoreInfoComponent implements OnInit {
  private category: Array<any> = [];

  constructor(private appDialogService:AppDialogService,private mineService:MineService,private router:Router,private route:ActivatedRoute) {
  }

  completeStoreInfo(f: NgForm) {
    if(f.form.controls['storeName'].invalid){
      this.appDialogService.setAlert("请输入店铺名称");
      return;
    }
    if(f.form.controls['storeAddr'].invalid){
      this.appDialogService.setAlert("请输入正确的店铺地址");
      return;
    }
    if(this.category.length===0){
      this.appDialogService.setAlert("请选择经营类目");
      return;
    }
    this.mineService.setStoreInfo(f.value.storeName,f.value.storeAddr,this.category);
    this.router.navigate(['../upload-img'],{relativeTo:this.route})
  }

  addToCategory(catCode) {
    let index = this.category.indexOf(catCode);
    if (index >-1) {
      this.category.splice(index, 1)
    } else {
      this.category.push(catCode);
    }
  }

  ngOnInit() {

  }
}
