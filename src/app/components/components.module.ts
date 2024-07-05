import { NgModule } from "@angular/core";
import { FeaturedCategoriesComponent } from "./featured-categories/featured-categories.component";
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";
import { SliderComponent } from "./slider/slider.component";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent,
    TableComponent
  ],

  imports: [
    CommonModule,
    NgxDatatableModule
  ],

  exports: [FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
