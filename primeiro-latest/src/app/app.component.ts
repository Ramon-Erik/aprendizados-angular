import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplatesBindingComponent } from "./components/templates/templates-binding/templates-binding.component";
import { TemplatesVariablesComponent } from "./components/templates/templates-variables/templates-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewComponent } from './components/template/template-deferrable-view/template-deferrable-view.component';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // NewComponent, TemplatesBindingComponent, TemplatesVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewComponent
    SignalsComponent
  ],
  template: `
  <!--<router-outlet></router-outlet> -->
    <!-- <h1>Oii {{title}}</h1> -->
    <div class="theme-dark">
      <!-- <app-new-component/>
      <app-templates-binding/> -->
      <!-- <app-templates-variables/> -->
      <!-- <app-template-control-flow/> -->
      <!-- <app-template-deferrable-view/> -->
      <app-signals/>
    </div>
  `,
})
export class AppComponent {
  title = 'primeiro-latest';
}
