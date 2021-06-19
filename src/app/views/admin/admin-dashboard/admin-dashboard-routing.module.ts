import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './admin-dashboard-account/add/add.component';
import { AdminDashboardAccountComponent } from './admin-dashboard-account/admin-dashboard-account.component';
import { EditssComponent } from './admin-dashboard-account/editss/editss.component';
import { AdminDashboardCustomerComponent } from './admin-dashboard-customer/admin-dashboard-customer.component';
import { CreatesComponent } from './admin-dashboard-customer/creates/creates.component';
import { EditsComponent } from './admin-dashboard-customer/edits/edits.component';
import { AdminDashboardLayoutComponent } from './admin-dashboard-layout/admin-dashboard-layout.component';
import { AdminDashboardOrderComponent } from './admin-dashboard-order/admin-dashboard-order.component';
import { AdminDashboardReportComponent } from './admin-dashboard-report/admin-dashboard-report.component';
import { AdminDashboardServiceComponent } from './admin-dashboard-service/admin-dashboard-service.component';
import { CreateComponent } from './admin-dashboard-service/create/create.component';
import { EditComponent } from './admin-dashboard-service/edit/edit.component';
import { AdminDashboardSystemComponent } from './admin-dashboard-system/admin-dashboard-system.component';

const auth_routes: Routes = [
    {
        path: 'admin/dashboard',
        component: AdminDashboardLayoutComponent,
        children: [
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: AdminDashboardAccountComponent },
            { path: 'account/add', component: AddComponent },
            { path: 'account/editss/:id', component: EditssComponent },
            { path: 'customer', component: AdminDashboardCustomerComponent },
            { path: 'customer/creates', component: CreatesComponent },
            { path: 'customer/edits/:id', component: EditsComponent },
            { path: 'order', component: AdminDashboardOrderComponent },
            { path: 'report', component: AdminDashboardReportComponent },
            { path: 'service', component: AdminDashboardServiceComponent },
            { path: 'service/create', component: CreateComponent },
            { path: 'service/edit/:id', component: EditComponent },
            { path: 'system', component: AdminDashboardSystemComponent },
           
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(auth_routes)],
    exports: [RouterModule],
})
export class AdminDashboardRoutingModule { }
