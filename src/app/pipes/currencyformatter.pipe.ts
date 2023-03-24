import { Pipe, PipeTransform } from '@angular/core';
import {} from '@angular/core';

@Pipe({
  name: 'currencyformatter'
})
export class CurrencyformatterPipe implements PipeTransform {

  transform(value: any, symbol:string): string {
    return (value.substr(0,3) !== '$'? value.replace('$',symbol):value);
  }

}
