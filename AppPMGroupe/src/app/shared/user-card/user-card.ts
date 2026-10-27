import { Component, input } from '@angular/core';
import { AppBtn } from '../app-btn/app-btn';

@Component({
  imports: [ AppBtn ],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  name = input('')
  email = input('')
  dateStart = input('')
  dateEnd = input('')
  returned = input<string | null>(null) 
}
