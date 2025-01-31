import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Customer } from '../../models/ICustomer';
import { SeoService } from '../../services/seo.service';
import { PtitleDirective } from '../../directives/ptitle.directive';
import { PhonePipe } from '../../pipes/phone.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [PtitleDirective, PhonePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  selectCustomer: Customer | null = null
  customers: Customer[] = []
  constructor( private api: ApiService, private seo: SeoService ) {
    this.seo.setSeo( 'Users', 'Users Detail' )
   }

  ngOnInit(): void {
    this.api.allUsers().subscribe({
      next: (res) => {
        //console.log(res)
        this.customers = res.data
        if( this.customers.length > 0 )
        this.selectCustomer = this.customers[0]
      },
      error: (err: any) => {
        localStorage.clear()
        window.location.replace('/')
      }
    })
  }

  fncSelectCustomer( customer: Customer ) {
    this.selectCustomer = customer
  }

}
