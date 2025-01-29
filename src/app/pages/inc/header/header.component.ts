import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  loginStatus = false
  userName = ""

  constructor() { 
    const token = localStorage.getItem( 'token' )
    const username = localStorage.getItem( 'username' )
    if ( token && username ) {
      this.loginStatus = true
      this.userName = username
    }else {
      const url = window.location.pathname
      if(url === '/' || url === '/register') {
        
      }else {
        window.location.replace('/')
      }
    }
  }

  logout() {
    localStorage.clear() // bütün dataları sil
    //this.loginStatus = false
    window.location.replace('/')
  }


}
