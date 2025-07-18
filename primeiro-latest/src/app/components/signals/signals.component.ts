import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Ramon ")
  public lastName = signal("Erik")
  public fullName = computed(() => {
    return this.firstName() + this.lastName()
  })
  public array = signal([1])
  constructor() {

  }
  public updateName(value: string) {
    return this.firstName.set(value + ' ')
  }
  public updateArray(value: HTMLInputElement) {
    let val = parseInt(value.value)
    // update serve em arrays e strings
    this.array.update((old: Array<number>) => {
      return [...old, val]
    })
  }
} 
