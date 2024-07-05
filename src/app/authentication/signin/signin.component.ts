import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SigninModel } from '@app/core/models/signin/signin.model';
import { AuthService } from '@app/core/service/auth-service/auth.service';
import { NotificationService } from '@app/core/service/notification-service/notification.service';
import { TokenService } from '@app/core/service/token-service/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  signinModel: SigninModel = new SigninModel();

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private tokenService: TokenService
  ) {
  }

  loginSubmitted() {
    this.authService.loginUser(this.signinModel).subscribe(
      (response: any) => {
        if (response.success && response.data) {

          this.redirectBasedOnRole();
        } else {

          this.notificationService.showError('Error en la autenticación.');
        }
      },
      (error) => {
        this.notificationService.showError('Autenticación fallida, correo o contraseña incorrectas.');
      }
    );
  }

  private redirectBasedOnRole() {
    const role = this.tokenService.getRole();
    if (role == '1') {
      this.router.navigate(['app/home']);
    } else if (role == '2') {
      this.router.navigate(['admin/home-admin']);
    } else {

      this.router.navigate(['/']);
    }
  }
}
