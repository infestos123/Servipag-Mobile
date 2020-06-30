import { TestBed } from '@angular/core/testing';

import { AppMovilServipagService } from './app-movil-servipag.service';

describe('AppMovilServipagService', () => {
  let service: AppMovilServipagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMovilServipagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
