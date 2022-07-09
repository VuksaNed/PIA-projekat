import { TestBed } from '@angular/core/testing';

import { ProcentiService } from './procenti.service';

describe('ProcentiService', () => {
  let service: ProcentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
