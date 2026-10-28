import { Component, input } from '@angular/core';
import { AppBtn } from '../app-btn/app-btn';

@Component({
  imports: [ AppBtn ],
  selector: 'app-card-items',
  styleUrl: './card-items.css',
  templateUrl: './card-items.html',
})
export class CardItems {
  serialCode = input('')
  name = input('')
  status= input('')
}
