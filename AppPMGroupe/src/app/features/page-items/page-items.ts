import { Component, inject, signal } from '@angular/core';
import { Material } from '../../core/material';
import { item } from '../../models/items';
import { CardItems } from '../../shared/card-items/card-items';

@Component({
  imports: [ CardItems ],
  selector: 'app-page-items',
  styleUrl: './page-items.css',
  templateUrl: './page-items.html',
})
export class PageItems {
  readonly itemsStore = inject(Material)

  ngOnInit(): void {
    this.itemsStore.getItems()
  }
}
