import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})

export class FileUploadComponent {
  @Output() uploadImg = new EventEmitter<any>();
  public defaultAddImg = './imgs/add-img.png';
  fileChooser(event) {
    if (!event.srcElement.files.length) {
      return
    }
    let files = [];
    files = event.srcElement.files;
    let reader = new FileReader();
    reader.onload = ((e) => {
      this.defaultAddImg = e.currentTarget['result'];
      this.upload(this.defaultAddImg, files[0].type);
    });
    reader.readAsDataURL(files[0]);
  }
  compress(img){
    let initSize=img.length;
    let width=img.width;
    let height=img.height;
    //如果图片像素大于四百万像素，计算压缩至四百万像素以下
    let ratio=width*height/4000000;
    if(ratio>1){
      width /=ratio;
      height /=ratio;
    }else {
      ratio=1
    }
  }
  upload(baseStr, type) {
    let text = window.atob(baseStr.split(',')[1]);
    let buffer = new ArrayBuffer(text.length);
    let uBuffer = new Uint8Array(buffer);
    for (let i = 0; i < text.length; i++) {
      uBuffer[i] = text.charCodeAt(i);
    }
    let Builder = window['WebKitBlobBuilder'] || window['MozBlobBuilder'];
    let blob;
    if (Builder) {
      let builder = new Builder();
      builder.append(buffer);
      blob = builder.getBlob(type);
    } else {
      blob = new window.Blob([buffer], {type: type})
    }
    let xhr = new XMLHttpRequest();
    let formData = new FormData();
    formData.append('image', blob);
    xhr.open('post', '/upload');
     xhr.onreadystatechange = (() => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.uploadImg.emit(JSON.parse(xhr.responseText));
      }
    });
    xhr.send(formData);
  }
}
