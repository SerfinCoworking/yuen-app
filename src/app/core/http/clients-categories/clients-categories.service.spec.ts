import { TestBed } from '@angular/core/testing';

import { ClientsCategoriesService } from './clients-categories.service';

describe('ClientsCategoriesService', () => {
  let service: ClientsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
