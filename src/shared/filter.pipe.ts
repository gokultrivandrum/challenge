import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(item => {
      return String(item.merchant.name).toLowerCase().includes(searchText.toLowerCase())
    }
    );;
  }
}
