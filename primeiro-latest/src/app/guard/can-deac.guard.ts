import { CanDeactivateFn } from '@angular/router';
import { ServicesComponent } from '../pages/services/services.component';

export const canDeacGuard: CanDeactivateFn<ServicesComponent> = (component, currentRoute, currentState, nextState) => { // você pode tipar o deactivate para ele receber seu componente e usar as variaveis dele
  console.log('deac');
  
  console.log(
    component, currentRoute, currentState, nextState
  );

  console.clear()
  console.log('deac x ', component.serviceId());

  if (component.form.get('name')?.valid) {
    return true // tem que ter cuidado com o histórico pois a rota pode bugar
  }
  
  return false;
};
