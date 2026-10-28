import { Component, signal, inject } from '@angular/core';
import {
  FormField,
  FormRoot,
  email,
  form,
  maxLength,
  minLength,
  readonly,
  required,
  minDate,
  maxDate,
} from '@angular/forms/signals';
import { LoanApi } from '../../core/loan-api';
import { Material } from '../../core/material';
import { item } from '../../models/items';

export interface MaterielDraft {
  itemId: string;
  borrower: string;
  borrowerEmail: string;
  startDate: string;
  dueDate: Date;
}

const EMPTY_DRAFT: MaterielDraft = {
  itemId: '',
  borrower: '',
  borrowerEmail: '',
  startDate: '',
  dueDate: new Date(),
};

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-form-loan-items',
  styleUrl: './form-loan-items.css',
  templateUrl: './form-loan-items.html',
})
export class FormLoanItems {
  private readonly api = inject(LoanApi);
  private readonly draft = signal<MaterielDraft>({ ...EMPTY_DRAFT });
  private readonly material = inject(Material);
  readonly items = signal<item[]>([]);

  ngOnInit(): void {
    this.material.getItems();
  }

  readonly FormLoanItemsForm = form(
    this.draft,
    (path) => {
      required(path.itemId, { message: 'Veuillez sélectionner un matériel.' });
      required(path.borrower, { message: 'Le prénom est obligatoire.' });
      required(path.borrowerEmail, { message: "L'email est obligatoire." });
      email(path.borrowerEmail, { message: "L'email n'est pas valide." });
      minLength(path.borrower, 2, { message: 'Le prénom doit contenir au moins 2 caractères.' });
      maxLength(path.borrower, 50, { message: 'Le prénom ne peut pas dépasser 50 caractères.' });
      required(path.dueDate, { message: 'La date de retour est obligatoire.' });
      minDate(path.dueDate, new Date(), {
        message: 'La date de retour ne peut pas être dans le passé.',
      });
      maxDate(path.dueDate, new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), {
        message: 'Vous ne pouvez pas emprunter un matériel pour plus de 14 jours.',
      });
    },
    {
      submission: {
        action: async () => this.saveForm(),
      },
    },
  );

  protected resetForm(): void {
    this.FormLoanItemsForm().reset({ ...EMPTY_DRAFT });
  }
  protected async saveForm(): Promise<void> {
    const result = await this.api.postLoan(this.draft());
    if (result) {
      this.resetForm();
      return;
    }
  }
}
