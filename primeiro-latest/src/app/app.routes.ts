import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'about',
    title: 'Sobre nós',
    component: AboutComponent
  },
  {
    path: 'services',
    title: 'Nossos serviços',
    component: AboutComponent
  }
];
