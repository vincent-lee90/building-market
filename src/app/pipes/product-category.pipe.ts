import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'productCategory'})
export class ProductCategoryPipe implements PipeTransform {
  transform(str: String) {
    let transStr = "";
    switch (str) {
      case '10001':
        transStr = "灯饰照明";
        break;
      case '10002':
        transStr = "厨房用品";
        break;
      case '10003':
        transStr = "卫浴用品";
        break;
      case '10004':
        transStr = "建材五金";
        break;
      case '10005':
        transStr = "墙地面";
        break;
      case '10006':
        transStr = "家用电器";
        break;
      case '10007':
        transStr = "门窗";
        break;
    }
    return transStr;
  }
}
