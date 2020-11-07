import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'services'
})
export class ServicesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
