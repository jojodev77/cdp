import { TestBed } from '@angular/core/testing';

import { OtageService } from './otage.service';

describe('OtageService', () => {
  let service: OtageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
