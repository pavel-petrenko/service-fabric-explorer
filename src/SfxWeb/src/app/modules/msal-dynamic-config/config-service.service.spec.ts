import { TestBed } from '@angular/core/testing';

import { AadConfigService } from './config-service.service';

describe('ConfigServiceService', () => {
  let service: AadConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AadConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
