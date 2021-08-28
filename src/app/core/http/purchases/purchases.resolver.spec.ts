import { TestBed } from '@angular/core/testing';

import { PurchasesResolver } from './purchases.resolver';

describe('PurchasesResolver', () => {
  let resolver: PurchasesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PurchasesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
