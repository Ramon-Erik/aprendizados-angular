import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'about',
        title: 'Sobre nós',
        component: AboutComponent,
      },
      {
        path: 'services/:id',
        title: 'Nossos serviços',
        component: ServicesComponent,
      },
    ],
  },
  { // rotas coringas ficam sempre no final
    path: '**',
    title: '404',
    component: NotFoundComponent,
  }
];
