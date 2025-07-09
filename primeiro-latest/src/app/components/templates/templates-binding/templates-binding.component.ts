import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templates-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './templates-binding.component.html',
  styleUrl: './templates-binding.component.scss'
})
export class TemplatesBindingComponent {
  public name: string = 'Ramon'
  public age: number = 19
  public isDisabled: boolean = true
  public condition = this.name ==="Ramon" ? "som" : "asa" 
  public isGreen = this.name === "Ramon" ? "green" : "blue" 

  public older() {
    return this.age++
  }

  public newer() {
    return this.age--
  }
  public amarelar() {
    return this.isGreen = "yellow"
  }
}
