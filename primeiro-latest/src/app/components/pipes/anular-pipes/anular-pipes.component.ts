import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
  registerLocaleData,
} from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomPipePipe } from '../../../pipes/custom-pipe.pipe';

// ver isso no app.config
// import localePt from '@angular/common/locales/pt' //faz com que os valores formatados por pipe fiquem em formato brasileiro
// registerLocaleData(localePt) //faz com que os valores formatados por pipe fiquem em formato brasileiro

@Component({
  // providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' } ], //faz com que os valores formatados por pipe fiquem em formato brasileiro
  selector: 'app-anular-pipes',
  standalone: true,
  imports: [DatePipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, CustomPipePipe],
  templateUrl: './anular-pipes.component.html',
  styleUrl: './anular-pipes.component.scss',
})
export class AnularPipesComponent {
  public date = signal<Date>(new Date());
  public loadingData$: Observable<string[]> = of([
    'Confissões',
    'Ortodoxia',
    'Cartas de um aprendiz ao seu diabo',
  ]).pipe(delay(3000));
}
