import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SigninModel } from '@app/core/models/signin/signin.model';
import { AuthService } from '@app/core/service/auth-service/auth.service';
import { NotificationService } from '@app/core/service/notification-service/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,) {
  }

  loginSubmitted() {
    let signin = new SigninModel();

    this.router.navigate(['/app/home']).then();

    // this.authService.loginUser(signin).subscribe((response: Response) => {
    //   if (response.success) {
    //     if (response.data.is_affiliate) {
    //       this.router.navigate(['/app/home']);
    //     } else {
    //       this.router.navigate(['admin/home']);
    //     }
    //   } else {
    //     this.notificationService.showError(response.message);
    //   }
    // });
  }
}
