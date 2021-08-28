import { TestBed } from '@angular/core/testing';

import { PurchaseProductResolver } from './purchase-product.resolver';

describe('PurchaseProductResolver', () => {
  let resolver: PurchaseProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PurchaseProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
