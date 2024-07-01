import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from "@angular/common";
import { HomeAdminComponent } from "./home-admin/home-admin.component";

@NgModule({
  declarations: [HomeAdminComponent],
  imports: [AdminRoutingModule, CommonModule,],
  exports: []
})
export class AdminModule { }
