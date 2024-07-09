import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.scss']
})
export class MultiInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() controlType: 'input' | 'select' | 'password' | 'email' = 'input';
  @Input() options: { value: string, display: string }[] = [];
  @Input() value: any = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() minLength: number | null = null;
  @Input() pattern: string | null = null;
  @Input() customValidator: ValidatorFn | null = null;

  @Output() valueChange = new EventEmitter<any>();

  control!: FormControl;
  uniqueId: string;

  constructor() {
    this.uniqueId = 'input_' + Math.random().toString(36).substr(2, 9);
  }

  ngOnInit() {
    this.initializeControl();
  }

  initializeControl() {
    const validators: ValidatorFn[] = [];

    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.controlType === 'email') {
      validators.push(Validators.email);
    }
    if (this.minLength !== null) {
      validators.push(Validators.minLength(this.minLength));
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    if (this.customValidator) {
      validators.push(this.customValidator);
    }

    this.control = new FormControl(this.value, validators);

    this.control.valueChanges.subscribe(value => {
      this.valueChange.emit(value);
    });
  }
}
