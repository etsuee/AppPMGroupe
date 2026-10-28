import { Component, inject, signal } from '@angular/core';
import { Material } from '../../core/material';

@Component({
  imports: [],
  selector: 'app-page-items-details',
  styleUrl: './page-items-details.css',
  templateUrl: './page-items-details.html',
})
export class PageItemsDetails {
  readonly itemsStore = inject(Material)
  readonly paramsId = signal<number>(0)

  ngOnInit(): void {
    this.itemsStore.getById(this.paramsId())
  }
}
