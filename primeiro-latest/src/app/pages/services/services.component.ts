import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #router = inject(Router)


  public serviceId = signal<null | string>('null');
  @Input() set id(idParam: any) {
    this.serviceId.set(idParam);
    console.log(idParam);
  }

  ngOnInit(): void {
    console.log('oi');
    console.log('[acessando] o id é: ', this.#route.snapshot.params['id']);
    this.#route.params.subscribe((res) =>
      console.log('[subscribe] o id é: ', res['id'])
    );

    console.log('q params', this.#route.snapshot.queryParamMap.get('nome'));
    this.#route.queryParamMap.subscribe({
      next: (q) => console.log(q.get('nome'))
      
      
    })
    
    console.log('saindo da services ');
    
    this.#router.navigate(['/'])
  }
}
