import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public condition = false
  public changeCondition() {
    this.condition = !this.condition 
  }
  public loadingData$: Observable<string[]> = of([
    'Confissões',
    'Ortodoxia',
    'Cartas de um aprendiz ao seu diabo'
  ]).pipe(delay(1000))
}
