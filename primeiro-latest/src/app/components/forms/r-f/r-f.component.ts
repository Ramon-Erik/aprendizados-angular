import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-r-f',
  standalone: true,
  imports: [ReactiveFormsModule], // ReactiveFormsModule perimite um form reativo
  templateUrl: './r-f.component.html',
  styleUrl: './r-f.component.scss'
})
export class RFComponent {
  name = new FormControl('Ramon') 
  public updateName() {
    this.name.setValue('cladio')
  }

  public profileForm = new FormGroup({
    data: new FormControl(''),
    devoc: new FormGroup({
      cristo: new FormControl('Sagrado Coração'),
      mariana: new FormControl('NS Carmo')
    }),
  })
  public clearForm() {
    this.profileForm.patchValue({
      data: '',
      devoc: {
        cristo: '',
        mariana: '',
      }
    })
  }
}
