import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [
    {
      id: '1',
      budgetId: '1',
      categoryId: '1',
      date: new Date('2023-06-05'),
      description: 'Weekly grocery shopping',
      amount: 85.75,
    },
    {
      id: '2',
      budgetId: '1',
      categoryId: '1',
      date: new Date('2023-06-12'),
      description: 'Fruits and vegetables',
      amount: 32.45,
    },
    {
      id: '3',
      budgetId: '2',
      categoryId: '2',
      date: new Date('2023-06-10'),
      description: 'Movie tickets',
      amount: 45.0,
    },
  ];

  private transactionsSubject = new BehaviorSubject<Transaction[]>(
    this.transactions
  );

  constructor() {}

  // Get all transactions, optionally filtered by budgetId
  getTransactions(budgetId?: string): Observable<Transaction[]> {
    return this.transactionsSubject
      .asObservable()
      .pipe(
        map((transactions) =>
          budgetId
            ? transactions.filter((t) => t.budgetId === budgetId)
            : transactions
        )
      );
  }

  // Get a single transaction by ID
  getTransaction(id: string): Observable<Transaction | undefined> {
    return this.transactionsSubject
      .asObservable()
      .pipe(
        map((transactions) =>
          transactions.find((transaction) => transaction.id === id)
        )
      );
  }

  // Create a new transaction
  createTransaction(
    transaction: Omit<Transaction, 'id'>
  ): Observable<Transaction> {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    };

    this.transactions = [...this.transactions, newTransaction];
    this.transactionsSubject.next(this.transactions);

    return of(newTransaction);
  }

  // Update an existing transaction
  updateTransaction(transaction: Transaction): Observable<Transaction> {
    this.transactions = this.transactions.map((t) =>
      t.id === transaction.id ? transaction : t
    );

    this.transactionsSubject.next(this.transactions);

    return of(transaction);
  }

  // Delete a transaction
  deleteTransaction(id: string): Observable<boolean> {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    this.transactionsSubject.next(this.transactions);

    return of(true);
  }

  // Get latest transactions (limited by count)
  getLatestTransactions(count: number = 5): Observable<Transaction[]> {
    return this.transactionsSubject
      .asObservable()
      .pipe(
        map((transactions) =>
          [...transactions]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .slice(0, count)
        )
      );
  }
}
