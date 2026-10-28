import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Material } from './core/material';
import { UserCard } from './shared/user-card/user-card';
import { FormLoanItems } from './shared/form-loan-items/form-loan-items';

@Component({
  imports: [RouterOutlet, UserCard, FormLoanItems],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AppPMGroupe');
  readonly material = inject(Material);
  readonly items = this.material.items();

  ngOnInit(): void {
    this.material.getItems();
    // this.material.getById(5);
  }
}
