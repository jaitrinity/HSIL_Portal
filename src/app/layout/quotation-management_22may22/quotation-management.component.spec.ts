import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationManagementComponent } from './quotation-management.component';

describe('QuotationManagementComponent', () => {
  let component: QuotationManagementComponent;
  let fixture: ComponentFixture<QuotationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
