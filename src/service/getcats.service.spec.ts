import { TestBed } from '@angular/core/testing';

import { GetcatsService } from './getcats.service';

describe('GetcatsService', () => {
  let service: GetcatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
