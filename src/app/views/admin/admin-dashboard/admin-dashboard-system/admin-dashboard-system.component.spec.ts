import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardSystemComponent } from './admin-dashboard-system.component';

describe('AdminDashboardSystemComponent', () => {
  let component: AdminDashboardSystemComponent;
  let fixture: ComponentFixture<AdminDashboardSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
