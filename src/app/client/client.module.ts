import { NgModule } from "@angular/core";
import { ClientRoutingModule } from "./client-routing.module";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import {CoreModule} from "@app/core/core.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [ClientRoutingModule, CommonModule],
  exports: []
})
export class ClientModule { }
