import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges {
  // começa com o costrutor e ngOnInit
  constructor(
    private fb: FormBuilder
  ) {}
  
  // ngOnchange usa o implements e verifica as alteraç~es de Inputs
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
}
