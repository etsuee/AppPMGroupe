import { Service, inject } from '@angular/core';
import { Loans } from '../models/loans';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const LOAN_ENDPOINT = 'http://localhost:3000/loans';

@Service()
export class LoanApi {
  private readonly http = inject(HttpClient);
  /** Enregistrer un prêt
   * @param loan - Le prêt à enregistrer
   * @return Promise<Loans> - Le prêt enregistré
   */
  async postLoan(loan: Loans): Promise<Loans> {
    const response = await firstValueFrom(this.http.post<Loans>(LOAN_ENDPOINT, loan));
    console.log('Prêt enregistré avec succès :', response);
    return response;
  }
}
