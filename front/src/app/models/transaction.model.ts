export interface Transaction {
  id: string;
  budgetId: string;
  categoryId: string;
  date: Date;
  description: string;
  amount: number;
}
