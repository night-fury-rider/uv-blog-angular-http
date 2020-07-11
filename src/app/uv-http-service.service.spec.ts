import { TestBed } from '@angular/core/testing';

import { UvHttpServiceService } from './uv-http-service.service';

describe('UvHttpServiceService', () => {
  let service: UvHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UvHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
