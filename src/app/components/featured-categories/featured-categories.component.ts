import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.scss'
})
export class FeaturedCategoriesComponent {
  @Input() categories: { img: string, title: string }[] = [];
}
