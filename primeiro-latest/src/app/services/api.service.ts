import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // com signal pode ser usado como
  public name = signal("nome com signal")
  public name$ = new BehaviorSubject('Nome com rxjs')
  constructor() { }
}
