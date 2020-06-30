import { TestBed } from '@angular/core/testing';

import { FireMessageService } from './fire-message.service';

describe('FireMessageService', () => {
  let service: FireMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
