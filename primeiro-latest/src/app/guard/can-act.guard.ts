import { CanActivateFn } from '@angular/router';

export const canActGuard: CanActivateFn = (route, state) => {
  console.log('can activate');
  console.log(route.queryParamMap, state);
  return false;
};
