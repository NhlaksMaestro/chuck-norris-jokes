import { TestBed } from '@angular/core/testing';

import { ChuckNorrisApiService } from './chuck-norris-api.service';

describe('ChuckNorrisApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChuckNorrisApiService = TestBed.get(ChuckNorrisApiService);
    expect(service).toBeTruthy();
  });
});
