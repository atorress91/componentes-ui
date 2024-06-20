import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { ResetComponent } from "./reset/reset.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    SigninComponent,
    ResetComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class AuthenticationModule {

}
