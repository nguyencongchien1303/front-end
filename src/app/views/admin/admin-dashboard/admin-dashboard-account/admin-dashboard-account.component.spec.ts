import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardAccountComponent } from './admin-dashboard-account.component';

describe('AdminDashboardAccountComponent', () => {
  let component: AdminDashboardAccountComponent;
  let fixture: ComponentFixture<AdminDashboardAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
