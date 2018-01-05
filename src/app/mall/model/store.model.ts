import {Product} from "./product.model";
export class StoreInfo{
  products?:Product[]=[];
  store_address?:String;
  store_cat?:any;
  store_code?:any;
  store_name?:string;
  store_intro?:string;
  user_id?:any;
  img_detail_urls?:string;
}
