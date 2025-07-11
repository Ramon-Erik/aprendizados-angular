import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-templates-variables',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './templates-variables.component.html',
  styleUrl: './templates-variables.component.scss'
})
export class TemplatesVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef
  @ViewChild('h2') public titulo2!: ElementRef

  // assim dá para pegar valores de dentro do componente
  @ViewChild(NewComponent) public newComp!: NewComponent

  ngAfterViewInit(): void {
    console.log('input:', this.nameInput.nativeElement.value)
    console.log('h2: ', this.titulo2.nativeElement.innerText)
    console.log('nc: ', this.newComp.book)
  }
}
