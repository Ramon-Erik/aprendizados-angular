import { CanMatchFn } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  console.log('funciona do mesmo jeito que aactivate');
  
  return true;
};
