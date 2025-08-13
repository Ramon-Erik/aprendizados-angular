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
import { TDFComponent } from './components/forms/t-d-f/t-d-f.component';
import { RFComponent } from './components/forms/r-f/r-f.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ConsumeServiceComponent } from './components/consume-service/consume-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // NewComponent, TemplatesBindingComponent, TemplatesVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewComponent, SignalsComponent,ComunicacaoComponent, AnularPipesComponent, TDFComponent, RFComponent ,ContentComponent, HostElementsComponent, LifeCycleComponent, ConsumeServiceComponent,
    RouterOutlet
],
  template: `
    <!-- <h1>Oii {{title}}</h1> -->
    <div class="theme-dark">
      <h1>Curso de angular com Dener</h1>
      <!-- 
        <app-new-component/>
        <app-templates-binding/> 
        <app-templates-variables/>
        <app-template-control-flow/>
        <app-template-deferrable-view/>
        <app-signals/>
        <app-comunicacao/>
        <app-anular-pipes/>
        <app-t-d-f/>
      <app-r-f/>
      <app-content>
        <h2 title>Esse titulo é do pai</h2>
        <p text>este texto é do componente pai</p>
        <div class="toChild">
          essa div é selecionada por classe
        </div>
        <div id="namedChild">
          esssa aqui por id
        </div>
      </app-content>
    </div>
    <app-host-elements/>
    <app-life-cycle/>
    <app-consume-service/>
  -->
  <h1>rotas</h1>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'primeiro-latest';
}
