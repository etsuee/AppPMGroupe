import { Routes } from '@angular/router';
import { PageItems } from './features/page-items/page-items';

export const routes: Routes = [
  // { path: '', component: Dashboard, title: 'Accueil' }
  { path: 'materiel', title: 'liste des materiels', component: PageItems },
//   { path: 'materiel/:id', component: ItemDetail, title: 'Détail du matériel' },
//   { path: 'materiel/:id/preter', component: LoanForm, title: 'Prêter un matériel' },
//   { path: 'retards', component: OverdueList, title: 'Prêts en retard' },
  { path: '**', redirectTo: '' },
];