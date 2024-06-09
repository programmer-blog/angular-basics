import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true
})
export class CountryCodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "+358-"+value;
  }

}
