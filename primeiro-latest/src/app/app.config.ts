import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// setando globalmente
import localePt from '@angular/common/locales/pt'; //faz com que os valores formatados por pipe fiquem em formato brasileiro
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
registerLocaleData(localePt); //faz com que os valores formatados por pipe fiquem em formato brasileiro

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
