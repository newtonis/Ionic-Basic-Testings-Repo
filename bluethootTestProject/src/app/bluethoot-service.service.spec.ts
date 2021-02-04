import { TestBed } from '@angular/core/testing';

import { BluethootServiceService } from './bluethoot-service.service';

describe('BluethootServiceService', () => {
  let service: BluethootServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BluethootServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
