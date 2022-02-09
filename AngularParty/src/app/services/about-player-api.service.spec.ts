import { TestBed } from '@angular/core/testing';

import { AboutPlayerApiService } from './about-player-api.service';

describe('AboutPlayerApiService', () => {
  let service: AboutPlayerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutPlayerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
