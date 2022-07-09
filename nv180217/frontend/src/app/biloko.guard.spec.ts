import { TestBed } from '@angular/core/testing';

import { BilokoGuard } from './biloko.guard';

describe('BilokoGuard', () => {
  let guard: BilokoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BilokoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
