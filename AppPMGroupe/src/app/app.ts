import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterielPret } from './materiel/materiel-pret/materiel-pret';

@Component({
  imports: [RouterOutlet, MaterielPret],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AppPMGroupe');
}
