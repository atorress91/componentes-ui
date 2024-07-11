import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() title: string = '';
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];

  constructor() {
  }
}
