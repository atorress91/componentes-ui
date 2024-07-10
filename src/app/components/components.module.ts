import { NgModule } from "@angular/core";
import { FeaturedCategoriesComponent } from "./featured-categories/featured-categories.component";
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";
import { SliderComponent } from "./slider/slider.component";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiInputComponent } from "./multi-input/multi-input.component";
import { NgxDropzoneModule } from "ngx-dropzone";
import { DropzoneComponent } from "./dropzone/dropzone.component";
import { DynamicButtonComponent } from "./dynamic-button/dynamic-button.component";

@NgModule({
  declarations: [
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent,
    TableComponent,
    MultiInputComponent,
    DropzoneComponent,
    DynamicButtonComponent
  ],

  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],

  exports: [FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent,
    TableComponent,
    MultiInputComponent,
    DynamicButtonComponent
  ]
})
export class ComponentsModule { }
