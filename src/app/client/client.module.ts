import { NgModule } from "@angular/core";
import { ClientRoutingModule } from "./client-routing.module";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "@app/components/components.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [ClientRoutingModule,
    CommonModule,
    ComponentsModule
  ],
  exports: []
})
export class ClientModule { }
