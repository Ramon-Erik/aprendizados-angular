import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet>
    <h1>Oii {{title}}</h1>
  </router-outlet>`,
})
export class AppComponent {
  title = 'primeiro-latest';
}
