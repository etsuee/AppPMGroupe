import { Component, signal, inject } from '@angular/core';
import {
  FormField,
  FormRoot,
  email,
  form,
  maxLength,
  minLength,
  required,
} from '@angular/forms/signals';
import { LoanApi } from '../../core/loan-api';

export interface MaterielDraft {
  itemId: number;
  borrower: string;
  borrowerEmail: string;
  startDate: string;
  dueDate: string;
}

const EMPTY_DRAFT: MaterielDraft = {
  itemId: 0,
  borrower: '',
  borrowerEmail: '',
  startDate: '',
  dueDate: '',
};

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-materiel-pret',
  styleUrl: './materiel-pret.css',
  templateUrl: './materiel-pret.html',
})
export class MaterielPret {
  private readonly api = inject(LoanApi);
  private readonly draft = signal<MaterielDraft>({ ...EMPTY_DRAFT });

  readonly materielPretForm = form(
    this.draft,
    (path) => {
      required(path.itemId, { message: "L'ID de l'item est obligatoire." });
      required(path.borrower, { message: 'Le prénom est obligatoire.' });
      required(path.borrowerEmail, { message: "L'email est obligatoire." });
      email(path.borrowerEmail, { message: "L'email n'est pas valide." });
      minLength(path.borrower, 2, { message: 'Le prénom doit contenir au moins 2 caractères.' });
      maxLength(path.borrower, 50, { message: 'Le prénom ne peut pas dépasser 50 caractères.' });
    },
    {
      submission: {
        action: async () => this.saveForm(),
      },
    },
  );

  protected resetForm(): void {
    this.materielPretForm().reset({ ...EMPTY_DRAFT });
  }
  protected async saveForm(): Promise<void> {
    const result = await this.api.postLoan(this.draft());
    if (result) {
      this.resetForm();
      return;
    }
  }
}
