import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = ''
  password = ''
  remember = false

  userLogin() {
    console.log(this.email, this.password, this.remember)
  }

  userControl(evt: any) {
    console.log(evt.target.value) // input value
    console.log(this.email)
  }

}
