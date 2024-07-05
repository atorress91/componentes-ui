import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '@app/core/models/user/user.model';
import { NotificationService } from '@app/core/service/notification-service/notification.service';
import { UserService } from '@app/core/service/user-service/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private userService: UserService, private notificationService: NotificationService,private router:Router) {

  }

  ngOnInit() {
    this.initControls();
  }

  initControls() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      contactPreferences: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
      rolId: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.markFormGroupTouched(this.registerForm);
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      console.log(user);
      this.saveUser(user);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  saveUser(user: User) {
    this.userService.createUser(user).subscribe({
      next: () => {
        this.registerForm.clearValidators();
        this.router.navigate(['/signin']).then();
        this.notificationService.showSuccess('Usuario creado exitosamente.')
      }, error: () => {
        this.notificationService.showError('Error al crear el usuario.')
      },
    })
  }
}
