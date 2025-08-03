import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document: keypress)': 'updateValue($event)'
  }
})
export class HostElementsComponent {
  // na versão antiga ao invés de host se usaria host decorators:
  @HostBinding('role') public hostRole = 'button'
  @HostBinding('attr.class') public hostClass = 'button'
  public class = 'umaClassEmVariavel'
  public updateValue(event: KeyboardEvent) {
    console.log(event.key);
    
  }
}
