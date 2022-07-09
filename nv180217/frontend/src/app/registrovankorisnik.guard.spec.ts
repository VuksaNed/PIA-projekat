import { TestBed } from '@angular/core/testing';

import { RegistrovankorisnikGuard } from './registrovankorisnik.guard';

describe('RegistrovankorisnikGuard', () => {
  let guard: RegistrovankorisnikGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistrovankorisnikGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
