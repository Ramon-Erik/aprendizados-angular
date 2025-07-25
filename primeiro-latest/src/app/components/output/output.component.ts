import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Output() public age = new EventEmitter<number>()
  public sendOutput() {
    return this.age.emit(10)
  }
}
