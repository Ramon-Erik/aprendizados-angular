import { Component, input, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-comunicacao',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './comunicacao.component.html',
  styleUrl: './comunicacao.component.scss'
})
export class ComunicacaoComponent {
  public name:string = "ramon"
  public age = signal(0)
}
