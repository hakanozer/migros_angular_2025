import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  pid = ''

  constructor( private route: ActivatedRoute, private api: ApiService ) {
      const params = this.route.paramMap
      params.forEach( param => {
        const id = param.get('id')
        if (id) {
          this.pid = id
        }
      })
  }

  ngOnInit(): void {
    this.api.singleProductService( this.pid ).subscribe({
      next: (res) => {
        const item = res.data
        console.log(item)
      },
      error: (err: any) => {
        
      }
    })
  }

}
