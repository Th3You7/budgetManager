import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget-transactions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './budget-transactions.component.html',
  styles: [],
})
export class BudgetTransactionsComponent {
  constructor(private route: ActivatedRoute) {
    // Get budget ID from route params
    this.route.params.subscribe((params) => {
      const budgetId = params['id'];
      // Load budget data will be implemented here
    });
  }
}
