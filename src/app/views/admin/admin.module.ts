import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AdminDashboardModule
  ]
})
export class AdminModule { }
