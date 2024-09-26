import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroCurrency'
})
export class EuroCurrencyPipe implements PipeTransform {
  /**
   * Format the price in euros as string => german format
   * @param value
   */
  transform(value: number): string {
    if (value == null) return '';

    // Format the price to DE currency
    return  value.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  }
}
