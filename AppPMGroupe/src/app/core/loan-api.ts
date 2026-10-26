import { Service, inject } from '@angular/core';
import { Loan } from '../models/loan';
import { HttpClient } from '@angular/common/http';

const LOAN_ENDPOINT = 'http://localhost:3000/loans';

@Service()
export class LoanApi {
  private readonly http = inject(HttpClient);
  /** Enregistrer un prêt
   * @param loan - Le prêt à enregistrer
   * @return Promise<Loan> - Le prêt enregistré
   */
  async postLoan(loan: Loan): Promise<Loan> {
    return await this.http.post<Loan>(LOAN_ENDPOINT, loan).subscribe((response) => {
      console.log('Prêt enregistré avec succès :', response);
    });
  }
}
