import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Grade = 'A'|'B'|'F'

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false)
  public grade = signal<Grade>('A')
  public frameWorks = signal(['Angular','Vue','Svelte','Qwick','React'])
  public frameWorks2 = signal([])

  public toogleContent(){
    this.showContent.update(value => !value)
  }
}
