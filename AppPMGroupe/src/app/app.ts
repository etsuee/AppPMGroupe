import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [MatToolbar, MatButton, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AppPMGroupe');
  readonly links = [
    { path: '/', label: 'Tableau de bord', exact: true },
    { path: '/materiel', label: 'Matériel', exact: false },
    { path: '/retards', label: 'Retards', exact: false },
  ];
}
