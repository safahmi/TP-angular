export interface SingleTransaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  description?: string;
  date: string;
}
