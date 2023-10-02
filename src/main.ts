import 'zone.js/dist/zone';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyMultiplierPipe } from './my-multiplier.pipe';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyMultiplierPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    <div>
    {{calc(9) | myMultiplier}}
    {{multiply(9)}}
    </div>
    <button (click)="nothing()">NOTHING</button>
  `,
})
export class App {
  name = 'Angular';

  multiply(x: number) {
    console.log('Invocado funcion');
    return x * 10;
  }
  calc(x: number) {
    console.log('Invocado calc');
    return x;
  }
  nothing(): void {}
}

bootstrapApplication(App);
