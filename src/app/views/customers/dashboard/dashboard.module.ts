import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardServiceComponent } from './dashboard-service/dashboard-service.component';
import { DashboardBookingComponent } from './dashboard-booking/dashboard-booking.component';
import { DashboardManageComponent } from './dashboard-manage/dashboard-manage.component';
import { DashboardHistoryComponent } from './dashboard-history/dashboard-history.component';
import { DashboardCheckoutComponent } from './dashboard-checkout/dashboard-checkout.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';



@NgModule({
  declarations: [DashboardLayoutComponent, DashboardHomeComponent, DashboardServiceComponent, DashboardBookingComponent, DashboardManageComponent, DashboardHistoryComponent, DashboardCheckoutComponent, DashboardProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
