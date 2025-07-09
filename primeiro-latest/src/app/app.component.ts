import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplatesBindingComponent } from "./components/templates/templates-binding/templates-binding.component";
import { TemplatesVariablesComponent } from "./components/templates/templates-variables/templates-variables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewComponent, TemplatesBindingComponent, TemplatesVariablesComponent],
  template: `
  <!--<router-outlet></router-outlet> -->
    <h1>Oii {{title}}</h1>
    <div class="theme-dark">
      <!-- <app-new-component/>
      <app-templates-binding/> -->
      <app-templates-variables/>
    </div>
  `,
})
export class AppComponent {
  title = 'primeiro-latest';
}
