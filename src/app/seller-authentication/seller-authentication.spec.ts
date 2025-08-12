import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAuthentication } from './seller-authentication';

describe('SellerAuthentication', () => {
  let component: SellerAuthentication;
  let fixture: ComponentFixture<SellerAuthentication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerAuthentication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAuthentication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
