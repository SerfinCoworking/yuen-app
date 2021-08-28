import { TestBed } from '@angular/core/testing';

import { UnitiesResolver } from './unities.resolver';

describe('UnitiesResolver', () => {
  let resolver: UnitiesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UnitiesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
