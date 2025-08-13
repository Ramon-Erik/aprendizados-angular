import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { canActGuard } from './guard/can-act.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'rota padrão',
    loadComponent: () => import('./pages/home/home.component').then(p => p.HomeComponent),
    //children: [ // tem como colar essas filhas em outro arquivo, para fazer um lazy loading maior
    //],
  },
    {
      path: 'home',
      title: 'Home',
      loadComponent: () => import('./pages/home/home.component').then(p => p.HomeComponent),
    },
    {
      path: 'about',
      title: 'Sobre nós',
      loadComponent: () => import('./pages/about/about.component').then(p => p.AboutComponent),
    },
    {
      path: 'services/:id',
      title: 'Nossos serviços',
      loadComponent: () => import('./pages/services/services.component').then(p => p.ServicesComponent),
      canActivate: [canActGuard] // a proteção de rotas serve sempre individualmente
    },
  { // rotas coringas ficam sempre no final
    path: '**',
    title: '404',
    loadComponent: () => import('./pages/not-found/not-found.component').then(p => p.NotFoundComponent),
  }
];
