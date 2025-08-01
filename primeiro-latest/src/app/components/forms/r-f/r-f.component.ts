import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

function textVaidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value)
    const hasNumber = /[0-9]/.test(control.value)
    if (hasNumber && hasUpperCase) {
      return { invalidText: false}
    }
    return { invalidText: true}
  }
}

@Component({
  selector: 'app-r-f',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe], // ReactiveFormsModule perimite um form reativo
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
    data: ['', [Validators.minLength(4), Validators.maxLength(20), Validators.required, textVaidator()]], //o primeiro é o valor, depois os validadores
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
