import { Service, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../../../models/loans';
import { Observable } from 'rxjs';

const LOAN_ENDPOINT = 'http://localhost:3000/api/loans';

@Service()
export class LoanApi {
  private readonly http = inject(HttpClient);
  readonly listLoan = signal<Loan[]>([]);
  readonly error = signal<string | null>(null);

  // METHODE GET /api/loans
  getAll(): void {
    this.http.get<Loan[]>(LOAN_ENDPOINT).subscribe({
      next: (loan) => {
        this.listLoan.set(loan);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Erreur: la liste ne peut être pas recuperee');
      },
    });
  }

  // METHODE GET /api/loans/:id
  getLoansByItem(itemId?: number): void {
    const params = itemId ? { params: { itemId } } : {};
    this.http.get<Loan[]>(LOAN_ENDPOINT, params).subscribe({
      next: (loan) => {
        this.listLoan.set(loan);
        console.log(loan);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Erreur');
      },
    });
  }
}
