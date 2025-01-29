import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProduct';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  proArr:Product[] = []
  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    this.allProduct( 1, 10 )
  }

  allProduct( page: number, per_page: number ) {
    this.api.productService( page, per_page ).subscribe({
      next: (res) => {
        console.log(res.data)
        this.proArr = res.data
      },
      error: (err: any) => {
        
      }
    })
  }

}
