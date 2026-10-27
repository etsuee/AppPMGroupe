import { Service, inject } from '@angular/core';
import { Loans } from '../models/loans';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { MaterielDraft } from '../materiel/materiel-pret/materiel-pret';

const LOAN_ENDPOINT = 'http://localhost:3000/loans';

@Service()
export class LoanApi {
  private readonly http = inject(HttpClient);
  /** Enregistrer un prêt
   * @param loan - Le prêt à enregistrer
   * @return Promise<MaterielDraft> - Le prêt enregistré
   */
  async postLoan(loan: MaterielDraft): Promise<MaterielDraft | undefined> {
    // mapper le MaterielDraft en Loans
    const loanToPost: Loans = {
      id: 0, // L'ID sera généré par le serveur
      itemId: loan.itemId,
      borrower: loan.borrower,
      borrowerEmail: loan.borrowerEmail,
      startDate: loan.startDate,
      dueDate: loan.dueDate,
      returnedAt: null,
    };
    const response = await firstValueFrom(this.http.post<Loans>(LOAN_ENDPOINT, loanToPost));
    console.log('Prêt enregistré avec succès :', response);
    return response;
  }

  /** Enregistrer un retour :
   *@return {Loans} Le prêt retourné
   *@example { "returnedAt": "2026-11-02" }*/
  async postLoanReturn(loanId: number): Promise<Loans | undefined> {
    const loanToReturn: Partial<Loans> = {
      startDate: new Date().toISOString(),
    };
    const response = await firstValueFrom(
      this.http.post<Loans>(`${LOAN_ENDPOINT}/${loanId}`, loanToReturn),
    );
    console.log('Retour enregistré avec succès :', response);
    return response;
  }
}
