import { Component, Input, signal } from '@angular/core';

function upper(val: string):string {
  return val.toUpperCase()
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({
    alias: 'apelido', // nome que vai no atributo html
    required: false, // a tag deve ter esse atributo
    transform: upper // função que vai modificar o valor recebido
  }) public inputData = "sem dados"

  // trabalhando com signal
  public inputDataSignal =  signal<string>("sem dados")
  @Input({
    alias: 'inputDataS', // nome que vai no atributo html
    required: false, // a tag deve ter esse atributo
    transform: upper // função que vai modificar o valor recebido
  }) set data(val: string) {
    this.inputDataSignal.set(val)
  }
}
