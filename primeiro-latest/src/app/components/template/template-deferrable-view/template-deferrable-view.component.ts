import { Component } from '@angular/core';
import { TemplateControlFlowComponent } from '../template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-template-deferrable-view',
  standalone: true,
  imports: [TemplateControlFlowComponent],
  templateUrl: './template-deferrable-view.component.html',
  styleUrl: './template-deferrable-view.component.scss'
})
export class TemplateDeferrableViewComponent {

}
