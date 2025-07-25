import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplatesBindingComponent } from "./components/templates/templates-binding/templates-binding.component";
import { TemplatesVariablesComponent } from "./components/templates/templates-variables/templates-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewComponent } from './components/template/template-deferrable-view/template-deferrable-view.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ComunicacaoComponent } from './components/comunicacao/comunicacao.component';
import { AnularPipesComponent } from './components/pipes/anular-pipes/anular-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // NewComponent, TemplatesBindingComponent, TemplatesVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewComponent, SignalsComponent,ComunicacaoComponent
    AnularPipesComponent
  ],
  template: `
  <!--<router-outlet></router-outlet> -->
    <!-- <h1>Oii {{title}}</h1> -->
    <div class="theme-dark">
      <h1>Curso de angular com Dener</h1>
      <!-- <app-new-component/>
      <app-templates-binding/> -->
      <!-- <app-templates-variables/> -->
      <!-- <app-template-control-flow/> -->
      <!-- <app-template-deferrable-view/> -->
      <!-- <app-signals/> -->
      <!-- <app-comunicacao/> -->
      <app-anular-pipes/>
    </div>
  `,
})
export class AppComponent {
  title = 'primeiro-latest';
}
