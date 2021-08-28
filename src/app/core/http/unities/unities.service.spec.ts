import { TestBed } from '@angular/core/testing';

import { UnitiesService } from './unities.service';

describe('UnitiesService', () => {
  let service: UnitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
