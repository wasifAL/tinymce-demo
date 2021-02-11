import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tinymce-demo';
  dataModel: string;

  onchangeoftiny($event): void {
    document.getElementById('preview').innerHTML = $event.editor.getContent();
  }
}
