import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (args[0] == 'upper') {
      return value.toUpperCase()
    }
    return null;
  }

}
