import {Component, OnInit} from "@angular/core";
import {MineService} from "../../service/mine.service";
import {StoreInfo} from "../../../mall/model/store.model";
import {NgForm} from "@angular/forms";
import {AppDialogService} from "../../../share/myDialog/app-alert/app-dialog.service";
@Component({
  selector:'edit-store',
  templateUrl:'./edit-store.component.html',
  styleUrls:['./edit-store.component.less']
})
export class EditStoreComponent implements OnInit{
  public storeInfo:StoreInfo;
  constructor(private mineService:MineService,private appDialogService:AppDialogService){

  }
  addToCategory(categoryCode){

  }
  saveStoreInfo(f:NgForm){
    if(f.form.controls['storeName'].invalid){
      this.appDialogService.setAlert('请输入店铺名称');
      return;
    }
    if(f.form.controls['storeIntro'].invalid){
      this.appDialogService.setAlert('请输入店铺简介');
      return;
    }
    if(f.form.controls['storeAddress'].invalid){
      this.appDialogService.setAlert('请输入店铺地址');
      return;
    }
  }


  ngOnInit(){
    this.storeInfo = this.mineService.myStoreInfo;
  }
}
