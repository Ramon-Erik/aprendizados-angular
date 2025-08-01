import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-t-d-f',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './t-d-f.component.html',
  styleUrl: './t-d-f.component.scss'
})
export class TDFComponent {
  public submitForm(form: NgForm) {
    if (form.valid) {
      // verificação extra, já que html pode ser mudado no dev tools
      console.log(form.value)
    }
  }
}
