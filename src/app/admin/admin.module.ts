import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [AdminRoutingModule,  CommonModule,],
  exports: []
})
export class AdminModule { }
