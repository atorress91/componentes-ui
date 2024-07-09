import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { ResetComponent } from "./reset/reset.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./register/register.component";
import { ToastrModule } from "ngx-toastr";
import { ComponentsModule } from "@app/components/components.module";

@NgModule({
  declarations: [
    SigninComponent,
    ResetComponent,
    RegisterComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule,
    ComponentsModule
  ],
  exports: [
  ]
})
export class AuthenticationModule {

}
