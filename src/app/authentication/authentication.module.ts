import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { ResetComponent } from "./reset/reset.component";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { RegisterComponent } from "./register/register.component";
import { ToastrModule } from "ngx-toastr";
import { ComponentsModule } from "@app/components/components.module";

@NgModule({ declarations: [
        SigninComponent,
        ResetComponent,
        RegisterComponent
    ],
    exports: [], imports: [AuthenticationRoutingModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ToastrModule,
        ComponentsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AuthenticationModule {

}
