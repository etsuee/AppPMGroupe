import { Routes } from '@angular/router';


export const routes: Routes = [
  // { path: '', component: Dashboard, title: 'Accueil' }
//   { path: 'materiel', title: 'liste des materiels', component: ItemList },
//   { path: 'materiel/:id', component: ItemDetail, title: 'Détail du matériel' },
//   { path: 'materiel/:id/preter', component: LoanForm, title: 'Prêter un matériel' },
//   { path: 'retards', component: OverdueList, title: 'Prêts en retard' },
  { path: '**', redirectTo: '' },
];