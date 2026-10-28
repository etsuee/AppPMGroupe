import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Material } from './core/material';
import { UserCard } from './shared/user-card/user-card';
import { PageItems } from './features/page-items/page-items';

@Component({
  imports: [RouterOutlet, UserCard, PageItems],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AppPMGroupe');
  readonly material = inject(Material)
  readonly items = this.material.items()

  // ngOnInit(): void {
  //  this.material.getById(5);
  // }
}
