import { TestBed } from '@angular/core/testing';

import { SellerServices } from './seller-services';

describe('SellerServices', () => {
  let service: SellerServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
