import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplatesBindingComponent } from "./components/templates/templates-binding/templates-binding.component";
import { TemplatesVariablesComponent } from "./components/templates/templates-variables/templates-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // NewComponent, TemplatesBindingComponent, TemplatesVariablesComponent, 
    TemplateControlFlowComponent
  ],
  template: `
  <!--<router-outlet></router-outlet> -->
    <h1>Oii {{title}}</h1>
    <div class="theme-dark">
      <!-- <app-new-component/>
      <app-templates-binding/> -->
      <!-- <app-templates-variables/> -->
      <app-template-control-flow/>
    </div>
  `,
})
export class AppComponent {
  title = 'primeiro-latest';
}
