import { TestBed } from '@angular/core/testing';

import { ProductsCategoriesResolver } from './products-categories.resolver';

describe('ProductsCategoriesResolver', () => {
  let resolver: ProductsCategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsCategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
