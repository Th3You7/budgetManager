export interface Budget {
  id: string;
  name: string;
  categoryId: string;
  amount: number;
  spent?: number;
  remaining?: number;
  startDate?: Date;
  endDate?: Date;
}
