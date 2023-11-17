import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-loader-component',
  standalone: true,
  imports: [CommonModule],
  template:  `
  <h1> Hola Mundo </h1>
  `
})
export class HeavyUsersSlowComponent {

}
