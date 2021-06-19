import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCheckoutComponent } from './dashboard-checkout.component';

describe('DashboardCheckoutComponent', () => {
  let component: DashboardCheckoutComponent;
  let fixture: ComponentFixture<DashboardCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
