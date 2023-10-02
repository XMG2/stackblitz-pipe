import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMultiplier',
  pure: true,
  standalone: true,
})
export class MyMultiplierPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log('Invocado Pipe', args);
    switch (args.length) {
      case 2:
        return (value * args[0]) / args[1];
      case 1:
        return value * args[0];
      default:
        return value * 3;
    }
  }
}
