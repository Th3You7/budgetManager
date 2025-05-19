import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { BudgetService } from '../../services/budget.service';
import { TransactionService } from '../../services/transaction.service';
import { Category } from '../../models/category.model';
import { Budget } from '../../models/budget.model';
import { Transaction } from '../../models/transaction.model';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  // Component data streams
  categories$: Observable<Category[]>;
  latestTransactions$: Observable<Transaction[]>;

  // Budget summary values
  totalBudget = 0;
  totalSpent = 0;
  totalRemaining = 0;

  // Category lookup map
  private categoryMap = new Map<string, string>();

  constructor(
    private categoryService: CategoryService,
    private budgetService: BudgetService,
    private transactionService: TransactionService
  ) {
    // Initialize data streams
    this.categories$ = this.categoryService.getCategories();
    this.latestTransactions$ = this.transactionService.getLatestTransactions(5);
  }

  ngOnInit(): void {
    // Create a lookup for category names
    this.categories$.subscribe((categories) => {
      categories.forEach((category) => {
        this.categoryMap.set(category.id, category.name);
      });
    });

    // Get budget summary data
    this.budgetService.getTotalBudgetAmount().subscribe((total) => {
      this.totalBudget = total;
    });

    this.budgetService.getTotalSpentAmount().subscribe((total) => {
      this.totalSpent = total;
    });

    this.budgetService.getTotalRemainingAmount().subscribe((total) => {
      this.totalRemaining = total;
    });
  }

  // Helper method to get category name
  getCategoryName(categoryId: string): string {
    return this.categoryMap.get(categoryId) || 'Unknown';
  }
}
