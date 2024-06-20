import { Component } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {
  email: string = '';

  onSubmit() {
    console.log('Solicitud de restablecimiento para:', this.email);
  }
}
