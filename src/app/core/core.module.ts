import { NgModule, Optional, SkipSelf } from "@angular/core";
import { throwIfAlreadyLoaded } from '@app/core/guard/module-import.guard';
import { AuthService } from "./service/auth-service/auth.service";
import { HeaderService } from "./service/header-service/header.service";
import { NotificationService } from "./service/notification-service/notification.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./interceptor/jwt.interceptor";
import { RoleService } from "./service/role-service/role.service";

@NgModule({
  imports: [],
  exports: [],
  providers: [
    AuthService,
    RoleService,
    HeaderService,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }

  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
