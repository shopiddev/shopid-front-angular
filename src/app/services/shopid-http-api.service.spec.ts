import { TestBed } from '@angular/core/testing';

import { ShopidHttpApiService } from './shopid-http-api.service';

describe('ShopidHttpApiService', () => {
  let service: ShopidHttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopidHttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
