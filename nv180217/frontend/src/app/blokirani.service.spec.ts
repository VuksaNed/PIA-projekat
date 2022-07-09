import { TestBed } from '@angular/core/testing';

import { BlokiraniService } from './blokirani.service';

describe('BlokiraniService', () => {
  let service: BlokiraniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlokiraniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
