import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {
  public state: string = "invalid"
  public book: object = {
    nome: "Confissões"
  }
}
