import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, of } from 'rxjs';
import { Budget } from '../models/budget.model';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from './transaction.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private budgets: Budget[] = [
    {
      id: '1',
      name: 'June Groceries',
      categoryId: '1',
      amount: 500,
      spent: 0,
      remaining: 500,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-06-30'),
    },
    {
      id: '2',
      name: 'June Entertainment',
      categoryId: '2',
      amount: 200,
      spent: 0,
      remaining: 200,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-06-30'),
    },
  ];

  private budgetsSubject = new BehaviorSubject<Budget[]>(this.budgets);

  constructor(private transactionService: TransactionService) {
    // Calculate spent and remaining amounts when transactions change
    this.updateBudgetCalculations();
  }

  private updateBudgetCalculations(): void {
    combineLatest([
      this.budgetsSubject.asObservable(),
      this.transactionService.getTransactions(),
    ]).subscribe(([budgets, transactions]) => {
      const updatedBudgets = budgets.map((budget) => {
        const budgetTransactions = transactions.filter(
          (t) => t.budgetId === budget.id
        );
        const spent = budgetTransactions.reduce(
          (total, t) => total + t.amount,
          0
        );
        const remaining = budget.amount - spent;

        return {
          ...budget,
          spent,
          remaining,
        };
      });

      this.budgets = updatedBudgets;
      this.budgetsSubject.next(this.budgets);
    });
  }

  // Get all budgets
  getBudgets(): Observable<Budget[]> {
    return this.budgetsSubject.asObservable();
  }

  // Get a single budget by ID
  getBudget(id: string): Observable<Budget | undefined> {
    return this.getBudgets().pipe(
      map((budgets) => budgets.find((budget) => budget.id === id))
    );
  }

  // Create a new budget
  createBudget(
    budget: Omit<Budget, 'id' | 'spent' | 'remaining'>
  ): Observable<Budget> {
    const newBudget: Budget = {
      ...budget,
      id: Date.now().toString(),
      spent: 0,
      remaining: budget.amount,
    };

    this.budgets = [...this.budgets, newBudget];
    this.budgetsSubject.next(this.budgets);

    return of(newBudget);
  }

  // Update an existing budget
  updateBudget(budget: Budget): Observable<Budget> {
    this.budgets = this.budgets.map((b) => (b.id === budget.id ? budget : b));

    this.budgetsSubject.next(this.budgets);

    return of(budget);
  }

  // Delete a budget
  deleteBudget(id: string): Observable<boolean> {
    this.budgets = this.budgets.filter((b) => b.id !== id);
    this.budgetsSubject.next(this.budgets);

    return of(true);
  }

  // Get budgets by category ID
  getBudgetsByCategory(categoryId: string): Observable<Budget[]> {
    return this.getBudgets().pipe(
      map((budgets) =>
        budgets.filter((budget) => budget.categoryId === categoryId)
      )
    );
  }

  // Get total budget amount across all budgets
  getTotalBudgetAmount(): Observable<number> {
    return this.getBudgets().pipe(
      map((budgets) =>
        budgets.reduce((total, budget) => total + budget.amount, 0)
      )
    );
  }

  // Get total spent amount across all budgets
  getTotalSpentAmount(): Observable<number> {
    return this.getBudgets().pipe(
      map((budgets) =>
        budgets.reduce((total, budget) => total + (budget.spent || 0), 0)
      )
    );
  }

  // Get total remaining amount across all budgets
  getTotalRemainingAmount(): Observable<number> {
    return this.getBudgets().pipe(
      map((budgets) =>
        budgets.reduce((total, budget) => total + (budget.remaining || 0), 0)
      )
    );
  }
}
