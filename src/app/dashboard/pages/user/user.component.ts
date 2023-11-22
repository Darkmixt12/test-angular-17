import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../../interfaces/req-response';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />
  
    @if( user() ){
      <section>
        <img [srcset]="user()!.avatar"
              class=""
        >

        <p>{{user()?.first_name}} <br> {{user()?.email}}</p>


      </section>
    }@else {
      <p>Cargando usuario...</p>
    }
  
  `
 
})





export default class UserComponent {

  private route = inject( ActivatedRoute)
  private userService = inject( UsersService );
  public titleLabel = computed( ()=> {
    if( this.user()) {
      return `${ this.user()?.first_name} ${this.user()?.last_name}`
    }else{
      return `Informacion del usuario`
    }
  })




  //public user = signal<User| undefined>(undefined)
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.userService.getUserById( id )) // en este caso destructuramos el params . id para solo tener que utilizar el ID en los campos
    )
  )
}
