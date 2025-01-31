import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor( private seo: SeoService ) {
    this.seo.setSeo( 'User Register', 'Register Detail' )
    const token = localStorage.getItem( 'token' )
    if ( token ) {
      window.location.replace('/dashboard')
    }
  }

}
