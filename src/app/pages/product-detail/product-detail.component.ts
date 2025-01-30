import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProduct';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  pid = ''
  item: Product | null = null
  bigImage = ''

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
        this.item = item
        this.bigImage = item.images[0]
      },
      error: (err: any) => {
        
      }
    })
  }

  setBigImage( img: string ) {
    this.bigImage = img
  }

}
