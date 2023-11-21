import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-view',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-virws.component.html',
  styles: ``
})
export default class DeferVirwsComponent {


  
}
