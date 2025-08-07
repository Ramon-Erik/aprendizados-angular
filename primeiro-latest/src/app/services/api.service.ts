import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // com signal pode ser usado como
  public name = signal('nome com signal');
  public name$ = new BehaviorSubject('Nome com rxjs');
  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setListTask = signal<Array<{ id: string; title: string }> | null>(null);

  get getListTasks() {
    return this.#setListTask.asReadonly();
  }

  public httpListTask$(): Observable<Array<{ id: string; title: string }>> {
    return this.#http
      .get<Array<{ id: string; title: string }>>(this.#url())
      .pipe(
        shareReplay(),
        tap((res) => this.#setListTask.set(res))
      );
  }

  #setTaskID = signal<{ id: string; title: string } | null>(null);

  get getTaskID() {
    return this.#setTaskID.asReadonly();
  }
  
  public httpTaskID$(id: string): Observable<{ id: string; title: string }> {
    return this.#http
      .get<{ id: string; title: string }>(`${this.#url()}${id}`)
      .pipe(
        shareReplay(),
        tap((res) => this.#setTaskID.set(res))
      );
  }
}
