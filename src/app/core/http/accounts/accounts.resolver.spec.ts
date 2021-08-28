import { TestBed } from '@angular/core/testing';

import { AccountsResolver } from './accounts.resolver';

describe('AccountsResolver', () => {
  let resolver: AccountsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AccountsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
