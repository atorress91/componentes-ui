import { NgModule, Optional, SkipSelf } from "@angular/core";
import { throwIfAlreadyLoaded } from '@app/core/guard/module-import.guard';
import { AuthService } from "./service/auth-service/auth.service";
import { HeaderService } from "./service/header-service/header.service";
import { NotificationService } from "./service/notification-service/notification.service";

@NgModule({
  imports: [],
  exports: [],
  providers: [
    AuthService,
    HeaderService,
    NotificationService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
