import {Component} from "@angular/core";
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})

export class FileUploadComponent {
  public test = './imgs/add-img.png';

  fileChooser(event) {
    if (!event.srcElement.files.length) {
      return
    }
    let files = [];
    files = event.srcElement.files;
    let reader = new FileReader();
    reader.onload = ((e) => {
      this.test=e.currentTarget['result'];

    });
    reader.readAsDataURL(files[0]);
  }
}
