import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    value = Math.round( value * 1.2 )
    const item = value + '₺';
    return item
  }

}
