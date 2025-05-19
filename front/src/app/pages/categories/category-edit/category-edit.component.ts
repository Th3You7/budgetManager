import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './category-edit.component.html',
  styles: [],
})
export class CategoryEditComponent {
  constructor(private route: ActivatedRoute) {
    // Get category ID from route params
    this.route.params.subscribe((params) => {
      const categoryId = params['id'];
      // Load category data will be implemented here
    });
  }
}
