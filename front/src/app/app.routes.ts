import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Budget Overview',
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/categories/categories-list/categories-list.component'
          ).then((m) => m.CategoriesListComponent),
        title: 'Categories',
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './pages/categories/category-edit/category-edit.component'
          ).then((m) => m.CategoryEditComponent),
        title: 'Edit Category',
      },
    ],
  },
  {
    path: 'budgets',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/budgets/budgets-list/budgets-list.component').then(
            (m) => m.BudgetsListComponent
          ),
        title: 'Budgets',
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './pages/budgets/budget-transactions/budget-transactions.component'
          ).then((m) => m.BudgetTransactionsComponent),
        title: 'Budget Transactions',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
