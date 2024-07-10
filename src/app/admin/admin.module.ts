import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from "@angular/common";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { ComponentsModule } from "@app/components/components.module";
import { LogComponent } from "./log/log.component";
import { FormsModule } from "@angular/forms";
import { ProductsListComponent } from "./products-list/products-list.component";

@NgModule({
  declarations: [
    HomeAdminComponent,
    LogComponent,
    ProductsListComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: []
})
export class AdminModule { }
