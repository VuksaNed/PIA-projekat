import { TestBed } from '@angular/core/testing';

import { ArhiviraniService } from './arhivirani.service';

describe('ArhiviraniService', () => {
  let service: ArhiviraniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArhiviraniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
