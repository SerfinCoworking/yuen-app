import { TestBed } from '@angular/core/testing';

import { ProvidersCategoriesService } from './providers-categories.service';

describe('ProvidersCategoriesService', () => {
  let service: ProvidersCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
