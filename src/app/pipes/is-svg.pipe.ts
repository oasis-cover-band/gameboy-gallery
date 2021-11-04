import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSVG'
})
export class IsSVGPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): boolean {
    if (value.substr(value.length - 4, value.length).toLowerCase() === '.svg') {
      return true;
    } else {
      return false;
    }
  }

}
