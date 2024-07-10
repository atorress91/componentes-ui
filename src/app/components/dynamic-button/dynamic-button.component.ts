import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonConfig } from '@app/core/interfaces/dynamic-button/button-config';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss']
})
export class DynamicButtonComponent {
  @Input() config!: ButtonConfig;
  @Output() action = new EventEmitter<string>();

  handleClick(actionId?: string) {
    this.action.emit(actionId);
  }
}
