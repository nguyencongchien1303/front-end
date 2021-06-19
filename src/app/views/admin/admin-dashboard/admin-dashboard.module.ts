import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardLayoutComponent } from './admin-dashboard-layout/admin-dashboard-layout.component';
import { AdminDashboardAccountComponent } from './admin-dashboard-account/admin-dashboard-account.component';
import { AdminDashboardCustomerComponent } from './admin-dashboard-customer/admin-dashboard-customer.component';
import { AdminDashboardOrderComponent } from './admin-dashboard-order/admin-dashboard-order.component';
import { AdminDashboardReportComponent } from './admin-dashboard-report/admin-dashboard-report.component';
import { AdminDashboardServiceComponent } from './admin-dashboard-service/admin-dashboard-service.component';
import { AdminDashboardSystemComponent } from './admin-dashboard-system/admin-dashboard-system.component';
import { CreateComponent } from './admin-dashboard-service/create/create.component';
import { EditComponent } from './admin-dashboard-service/edit/edit.component';
import { AddComponent } from './admin-dashboard-account/add/add.component';
import { CreatesComponent } from './admin-dashboard-customer/creates/creates.component';
import { EditsComponent } from './admin-dashboard-customer/edits/edits.component';
import { EditssComponent } from './admin-dashboard-account/editss/editss.component';




@NgModule({
  declarations: [
    AdminDashboardLayoutComponent,
    AdminDashboardAccountComponent,
    AdminDashboardCustomerComponent,
    AdminDashboardOrderComponent,
    AdminDashboardReportComponent,
    AdminDashboardServiceComponent,
    AdminDashboardSystemComponent,
    CreateComponent,
    EditComponent,
    AddComponent,
    CreatesComponent,
    EditsComponent,
    EditssComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
