import { TestBed } from '@angular/core/testing';

import { ApiAutos } from './api-autos';

describe('ApiAutos', () => {
  let service: ApiAutos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAutos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
