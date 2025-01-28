import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { emailValid } from '../../utils/util';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = 'hakanozer02@gmail.com'
  password = '123456'
  remember = true

  constructor( private api: ApiService, private route: Router ) { 
    // nesne hazırlığı yapılması için uygun yer
    console.log('constructor - 1')
  }

  ngOnInit(): void {
    console.log('ngOnInit - 2')
    setTimeout(() => {
      //this.email = 'ali@example.com'
    }, 5000);
  }

  userLogin() {
    
    const emailStatus = emailValid(this.email)
    if (!emailStatus) {
      alert('Lütfen geçerli bir email adresi giriniz.')
    }else if ( this.password == "" ) {
      alert('Lütfen şifre giriniz.')
    }else {
      this.api.loginService(this.email, this.password).subscribe({
        next: (res) => { 
          localStorage.setItem( 'token', res.data.access_token )
          localStorage.setItem( 'username', res.data.user.name )
          // 1. yöntem
          // window.location.href = '/dashboard'
          // 2. yöntem
          // window.location.replace('/dashboard')
          // 3. yöntem
          this.route.navigate(['/dashboard'])
        },
        error: (err: any) => { 
          alert(err.error.message)
        }
      })
      
    }
  }

  userControl(evt: any) {
    console.log(evt.target.value) // input value
    console.log(this.email)
  }

}
