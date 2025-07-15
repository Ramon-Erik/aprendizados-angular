import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public mostrarAulas = false;
  public changeCondition() {
    this.mostrarAulas = !this.mostrarAulas;
  }
  // cria um observable que emite, depois de 1 segundo um array
  public loadingData$: Observable<string[]> = of([
    'Confissões',
    'Ortodoxia',
    'Cartas de um aprendiz ao seu diabo',
  ]).pipe(delay(1000));
}
