import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { AdminLayoutComponent } from "./layout/app-layout/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [],
    children: [

      { path: '', redirectTo: '/signin', pathMatch: 'full' },
      {
        path: 'app',
        loadChildren: () =>
          import('./client/client.module').then((m) => m.ClientModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [],
    children: [

      { path: '', redirectTo: '/signin', pathMatch: 'full' },
      {
        path: 'app',
        loadChildren: () =>
          import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
