import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanApi } from './core/loan-api';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AppPMGroupe');
  readonly liste = inject(LoanApi);

  ngOnInit() {
    this.liste.getAll();
    this.liste.getLoansByItem();
  }
}
