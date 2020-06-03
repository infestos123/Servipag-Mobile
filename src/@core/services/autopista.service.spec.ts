import { TestBed } from '@angular/core/testing';

import { AutopistaService } from './autopista.service';

describe('AutopistaService', () => {
  let service: AutopistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutopistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
