import { TestBed } from '@angular/core/testing';

import { ProvidersCategoriesResolver } from './providers-categories.resolver';

describe('ProvidersCategoriesResolver', () => {
  let resolver: ProvidersCategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProvidersCategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
