import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: '1',
      name: 'Groceries',
      description: 'Food and household essentials',
      budgetLimit: 500,
    },
    {
      id: '2',
      name: 'Entertainment',
      description: 'Movies, games, and fun activities',
      budgetLimit: 200,
    },
    {
      id: '3',
      name: 'Transportation',
      description: 'Gas, public transit, and vehicle maintenance',
      budgetLimit: 300,
    },
  ];

  private categoriesSubject = new BehaviorSubject<Category[]>(this.categories);

  constructor() {}

  // Get all categories
  getCategories(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }

  // Get a single category by ID
  getCategory(id: string): Observable<Category | undefined> {
    return this.getCategories().pipe(
      map((categories) => categories.find((category) => category.id === id))
    );
  }

  // Create a new category
  createCategory(category: Omit<Category, 'id'>): Observable<Category> {
    const newCategory: Category = {
      ...category,
      id: Date.now().toString(),
    };

    this.categories = [...this.categories, newCategory];
    this.categoriesSubject.next(this.categories);

    return of(newCategory);
  }

  // Update an existing category
  updateCategory(category: Category): Observable<Category> {
    this.categories = this.categories.map((c) =>
      c.id === category.id ? category : c
    );

    this.categoriesSubject.next(this.categories);

    return of(category);
  }

  // Delete a category
  deleteCategory(id: string): Observable<boolean> {
    this.categories = this.categories.filter((c) => c.id !== id);
    this.categoriesSubject.next(this.categories);

    return of(true);
  }
}
