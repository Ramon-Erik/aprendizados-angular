import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-anular-pipes',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  templateUrl: './anular-pipes.component.html',
  styleUrl: './anular-pipes.component.scss'
})
export class AnularPipesComponent {
  public date = signal<Date>(new Date())
  public loadingData$: Observable<string[]> = of([
      'Confissões',
      'Ortodoxia',
      'Cartas de um aprendiz ao seu diabo',
    ]).pipe(delay(3000));
}
