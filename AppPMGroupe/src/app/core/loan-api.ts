import { Service, inject, signal } from '@angular/core';
import { Loans } from '../models/loans';
import { item } from '../models/items';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const LOAN_ENDPOINT = 'http://localhost:3000/api/loans';

@Service()
export class LoanApi {
  private readonly http = inject(HttpClient);
  readonly listLoan = signal<Loans[]>([]);
  readonly error = signal<string | null>(null);

  // METHODE GET /api/loans
  getAll(): void {
    this.http.get<Loans[]>(LOAN_ENDPOINT).subscribe({
      next: (loan) => {
        this.listLoan.set(loan);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Erreur: la liste ne peut être pas recuperee');
      },
    });
  }

  // getLoansByItem(itemId?: number): void {
  //   this.http.get<Loans[]>(LOAN_ENDPOINT, { params: { itemId } }).subscribe({
  //     next: (loan) => {
  //       this.listLoan.set(loan);
  //       console.log(loan);
  //     },
  //     error: (err) => {
  //       this.error.set(err.error?.message ?? 'Erreur');
  //     },
  //   });
  // }

  // METHODE GET /api/loans/:id
  getLoansByItem(itemId?: number): void {
    const params = itemId ? { params: { itemId } } : {};
    this.http.get<Loans[]>(LOAN_ENDPOINT, params).subscribe({
      next: (loan) => {
        this.listLoan.set(loan);
        console.log(loan);
      },
      error: (err) => {
        this.error.set(err.error?.message ?? 'Erreur');
      },
    });
  }

  // METHODE PATCH /api/loans/:id - A FAIRE
  // returnLoan(id: number, returnedAt: string): Observable<Loans> {
  //   return this.http.patch<Loans>(`${LOAN_ENDPOINT}/loans/${id}`, { returnedAt });
  // }
}
