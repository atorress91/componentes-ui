import { NgModule, Optional, SkipSelf } from "@angular/core";
import { throwIfAlreadyLoaded } from '@app/core/guard/module-import.guard';
import { AuthService } from "./service/auth-service/auth.service";
import { HeaderService } from "./service/header-service/header.service";
import { NotificationService } from "./service/notification-service/notification.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./interceptor/jwt.interceptor";
import { TokenService } from "./service/token-service/token.service";
import { LogService } from "./service/log-service/log.service";
import { FirebaseService } from "./service/firebase-service/firebase.service";

@NgModule({
  imports: [],
  exports: [],
  providers: [
    AuthService,
    HeaderService,
    NotificationService,
    TokenService,
    LogService,
    FirebaseService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }

  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
