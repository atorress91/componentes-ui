import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { LogComponent } from "./log/log.component";
import { ProductsListComponent } from "./products-list/products-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'home-admin',
    component: HomeAdminComponent
  },
  {
    path: 'logs',
    component: LogComponent
  },
  {
    path: 'product-list',
    component: ProductsListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {

}
