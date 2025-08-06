import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { NewComponent } from '../new-component/new-component.component';
import { ApiService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [NewComponent, AsyncPipe, JsonPipe],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
})
export class ConsumeServiceComponent implements OnInit {
  @ViewChild('nomeSignal') pSignal!: ElementRef;
  @ViewChild('nomeRxjs') pRxjs!: ElementRef;
  #apiService = inject(ApiService);
  public getTask$ = this.#apiService.httpListTask$();
  public getTask = signal<null | Array<{ id: string; title: string }>>(null);
  ngOnInit(): void {
    this.getTask$.subscribe({
      next: (next) => this.getTask.set(next),
      error: console.log,
      complete: console.log,
    });
    // {
    //   console.log(this.#apiService.name()); // funciona poiu é um signal
    // console.log(this.#apiService.name$); // retorna um objeto, deve ser usado de outra forma

    // this.#apiService.name$.subscribe({
    //   next: console.log,
    //   error: console.log,
    //   complete: console.log,
    // })

    // this.#apiService.name$.next('novo valor com rxjs') // atualiza em todos os locais que estçao escritos, tudo qe usar o valor antigo vai ser refeito com o valor novo

    // this.#apiService.name.set('novo valor com signal') // atualiza o valor, mas não dá um novo log

    // // console.log(this.pSignal, this.pRxjs);
    // // this.pSignal.nativeElement.textContent = this.#apiService.name
    // // this.pRxjs.nativeElement.textContent = this.#apiService.name$
    // }
  }
}
