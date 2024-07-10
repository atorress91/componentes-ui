import { Component } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrl: './dropzone.component.scss'
})
export class DropzoneComponent {
  files: File[] = [];

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files = [];

    this.files.push(...event.addedFiles);
  }

  onRemove(file: File) {
    this.files = this.files.filter(f => f !== file);
  }
}
