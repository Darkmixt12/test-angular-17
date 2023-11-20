import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1 class="text-3xl mb-5"> {{title}} </h1>
  `
})
export class TitleComponent {

  @Input({ required: true}) title!: string
}
