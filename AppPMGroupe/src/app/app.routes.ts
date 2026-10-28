import { Routes } from '@angular/router';
import { ItemList } from './features/items/item-list/item-list';
import { ItemDetail } from './features/items/item-detail/item-detail';
import { OverdueList } from './loans/overdue-list/overdue-list';

export const routes: Routes = [
  // { path: '', component: Dashboard, title: 'Accueil' }
  { path: 'materiel', title: 'liste des materiels', component: ItemList },
  { path: 'retard', title: 'liste des materiels', component: ItemList },
  { path: 'materiel/:id', component: ItemDetail, title: 'Détail du matériel' },
  { path: 'materiel/:id/preter', component: LoanForm, title: 'Prêter un matériel' },
  { path: 'retards', component: OverdueList, title: 'Prêts en retard' },
];
