import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './compnents/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewComponent],
  template: `
  <!--<router-outlet></router-outlet> -->
    <h1>Oii {{title}}</h1>
    <app-new-component/>
  `,
})
export class AppComponent {
  title = 'primeiro-latest';
}
