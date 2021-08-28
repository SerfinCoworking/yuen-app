import { TestBed } from '@angular/core/testing';

import { ClientsCategoriesResolver } from './clients-categories.resolver';

describe('ClientsCategoriesResolver', () => {
  let resolver: ClientsCategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ClientsCategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
