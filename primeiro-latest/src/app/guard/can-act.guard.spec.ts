import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canActGuard } from './can-act.guard';

describe('canActGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
