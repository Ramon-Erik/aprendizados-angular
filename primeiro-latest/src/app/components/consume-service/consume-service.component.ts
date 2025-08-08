import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponent } from '../new-component/new-component.component';
import { ApiService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  // public getTask$ = this.#apiService.httpTaskList$();
  // isso pode virar signal com a função to signal
  // import {toSignal} from '@angular/core/rxjs-interop'
  // public getTask = toSignal(this.#apiService.httpTaskList$());

  public getTaskList = this.#apiService.getTaskList
  public getTaskID = this.#apiService.getTaskID

  public httpCreateTask(title: string) {
    return this.#apiService.httpCreateTask$(title).pipe(
      concatMap(() => this.#apiService.httpTaskList$())
    ).subscribe()
  } // com esse pipe antes do subscribe ele tenta criar primeiro e depois se inscreve
  // se der erro ele não prossegue

  ngOnInit(): void {
    this.#apiService.httpTaskList$().subscribe() // o tap vai colocar os valores no getTask
    this.#apiService.httpTaskID$('klSNowU032B1sEXZ41Jl').subscribe() // o tap vai colocar os valores no getTask
    // this.getTask$.subscribe({
    //   next: (next) => console.log,
    //   error: console.log,
    //   complete: console.log,
    // });
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
