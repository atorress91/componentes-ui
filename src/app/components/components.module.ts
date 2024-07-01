import { NgModule } from "@angular/core";
import { FeaturedCategoriesComponent } from "./featured-categories/featured-categories.component";
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";
import { SliderComponent } from "./slider/slider.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent],

  imports: [CommonModule],

  exports: [FeaturedCategoriesComponent,
    FeaturedProductsComponent,
    SliderComponent]
})
export class ComponentsModule { }
