import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LoadingBarModule } from "@ngx-loading-bar/core";

import { AdminLayoutComponent } from "./app-layout/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./app-layout/main-layout/main-layout.component";
import { FooterComponent } from "./footer/footer.component";
import { PageLoaderComponent } from "./page-loader/page-loader.component";
import { HeaderComponent } from "./header/header.component";


@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule, LoadingBarModule],
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    PageLoaderComponent
  ],
  exports: [
    AuthLayoutComponent,
    MainLayoutComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    PageLoaderComponent
  ],
})
export class LayoutModule {

}
