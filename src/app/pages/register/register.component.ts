import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor() {
    const token = localStorage.getItem( 'token' )
    if ( token ) {
      window.location.replace('/dashboard')
    }
  }

}
