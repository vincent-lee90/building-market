import {Component} from "@angular/core";
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})

export class FileUploadComponent {
  fileChooser(event) {
    if (!event.srcElement.files.length) {
      return
    }
    var files = [];
    files = event.srcElement.files;
    let reader = new FileReader();
    reader.onload=function () {
      console.log(1)
    }

  }
}
