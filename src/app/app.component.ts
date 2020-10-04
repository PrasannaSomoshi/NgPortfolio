import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-banner></app-banner>
  `,
})
export class AppComponent {
  title = 'Portfolio';
}
