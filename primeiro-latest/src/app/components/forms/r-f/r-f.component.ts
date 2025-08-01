import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-r-f',
  standalone: true,
  imports: [ReactiveFormsModule], // ReactiveFormsModule perimite um form reativo
  templateUrl: './r-f.component.html',
  styleUrl: './r-f.component.scss'
})
export class RFComponent {
  constructor(
    private _fb: FormBuilder //usa isso opara evitar a #FORMA 1 e usar a #FORMA 2
  ) {}
  // tem como fazer isso sem construtor:
  #fb2 = inject(FormBuilder)
  name = new FormControl('Ramon') 
  public updateName() {
    this.name.setValue('cladio')
  }
  // #FORMA 1 - com new em tudo
  public profileForm = new FormGroup({
    data: new FormControl(''),
    devoc: new FormGroup({
      cristo: new FormControl('Sagrado Coração'),
      mariana: new FormControl('NS Carmo')
    }),
  })
  // #FORMA 2
  public profileForm2 = this._fb.group({
    data: [''],
    devoc: this._fb.group({
      cristo: ['Sagrado Coração'],
      mariana: ['NS Carmo']
    }),
    favoriteFoods: this._fb.array([['lasagna']])
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
