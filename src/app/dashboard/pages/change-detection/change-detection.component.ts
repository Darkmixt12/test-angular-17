import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `

      <app-title title="Change Detection" />

      <pre> {{frameWorkSignal | json}} </pre>
      <pre> {{frameWorkTraditional | json}} </pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public frameWorkSignal = signal({
    name: 'Angular',
    relaseDate: 2016
  })

  public frameWorkTraditional = {
    name: 'Angular',
    relaseDate: 2016,
  }

  constructor(){
  setTimeout(() => {

    // this.frameworkAsProperty.name = 'REACT'
    this.frameWorkSignal.update( value => ({
      ...value ,
      name: 'React'
    }))

    console.log('Hecho')
  }, 3000);

}

}
