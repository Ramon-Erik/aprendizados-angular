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

  #setTaskList = signal<Array<{ id: string; title: string }> | null>(null);
  get getTaskList() {
    return this.#setTaskList.asReadonly();
  }
  public httpTaskList$(): Observable<Array<{ id: string; title: string }>> {
    this.#setTaskList.set(null)
    return this.#http
      .get<Array<{ id: string; title: string }>>(this.#url())
      .pipe(
        shareReplay(),
        tap((res) => this.#setTaskList.set(res))
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

  public httpCreateTask$(
    title: string
  ): Observable<{ id: string; title: string }> {
    return this.#http
      .post<{ id: string; title: string }>(this.#url(), { title })
      .pipe(
        shareReplay(),
      );
  }
  
  public httpUpdateTask$(
    id: string,
    title: string
  ): Observable<{ id: string; title: string }> {
    console.log(`${this.#url()}${id}`, { title });
    
    return this.#http
      .patch<{ id: string; title: string }>(`${this.#url()}${id}`, { title })
      .pipe(
        shareReplay(),
      );
  }

  public httpDeleteTask$(
    id: string,
  ): Observable<{ id: string; title: string }> {
    return this.#http
      .delete<{ id: string; title: string }>(`${this.#url()}${id}`)
      .pipe(
        shareReplay(),
      );
  }
}
