import { NgModule } from "@angular/core";
import { FeaturedCategoriesComponent } from "./featured-categories/featured-categories.component";
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";
import { SliderComponent } from "./slider/slider.component";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiInputComponent } from "./multi-input/multi-input.component";

@NgModule({
  declarations: [
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent,
    TableComponent,
    MultiInputComponent
  ],

  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent,
    TableComponent,
    MultiInputComponent
  ]
})
export class ComponentsModule { }
