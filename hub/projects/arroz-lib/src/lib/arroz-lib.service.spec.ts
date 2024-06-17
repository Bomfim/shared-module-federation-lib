import { TestBed } from '@angular/core/testing';

import { ArrozLibService } from './arroz-lib.service';

describe('ArrozLibService', () => {
  let service: ArrozLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrozLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
