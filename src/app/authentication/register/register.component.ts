import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models/user/user.model';
import { NotificationService } from '@app/core/service/notification-service/notification.service';
import { UserService } from '@app/core/service/user-service/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formData: any = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    address: '',
    contactPreferences: '',
    rolId: ''
  };

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.isFormValid()) {
      const user: User = this.formData;
      this.saveUser(user);
    } else {
      this.notificationService.showError('Por favor, corrija los errores en el formulario antes de enviar.');
    }
  }

  isFormValid(): boolean {
    return Object.values(this.formData).every(value => value !== '');
  }

  saveUser(user: User) {
    this.userService.createUser(user).subscribe({
      next: () => {
        this.router.navigate(['/signin']).then();
        this.notificationService.showSuccess('Usuario creado exitosamente.');
      },
      error: () => {
        this.notificationService.showError('Error al crear el usuario.');
      },
    });
  }
}
