import { TestBed } from '@angular/core/testing';

import { CategoryUpdaterService } from './category-updater.service';

describe('CategoryUpdaterService', () => {
  let service: CategoryUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
