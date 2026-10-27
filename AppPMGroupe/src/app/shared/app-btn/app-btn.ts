import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-btn',
  styleUrl: './app-btn.css',
  templateUrl: './app-btn.html',
})
export class AppBtn {
  label = input('Button');
  type = input<'button' | 'submit' | 'reset'>('button');
  clicked = output<void>();
}
