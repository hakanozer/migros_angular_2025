import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return this.formatPhoneNumber(value)
  }

  formatPhoneNumber(phone: string) {
    return phone.replace(/(\+\d{1,2})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
  }

}
