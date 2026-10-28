export interface Loans {
  id: number;
  itemId: number;
  borrower: string;
  borrowerEmail: string;
  startDate: string;
  dueDate: Date;
  returnedAt: string | null;
}
