import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Customer } from '../../models/ICustomer';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  selectCustomer: Customer | null = null
  customers: Customer[] = []
  constructor( private api: ApiService ) { }

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
