import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnterpriseDashboardLayoutComponent } from "./enterprise-dashboard-layout/enterprise-dashboard-layout.component";
import { EnterpriseDashboardHomeComponent } from "./enterprise-dashboard-home/enterprise-dashboard-home.component";
import { EnterpriseDashboardPriceComponent } from "./enterprise-dashboard-price/enterprise-dashboard-price.component";
import { EnterpriseDashboardBookingComponent } from "./enterprise-dashboard-booking/enterprise-dashboard-booking.component";
import { EnterpriseDashboardOrderComponent } from "./enterprise-dashboard-order/enterprise-dashboard-order.component";
import { EnterpriseDashboardShipingComponent } from "./enterprise-dashboard-shiping/enterprise-dashboard-shiping.component";
import { SharedModule } from "../../../shared/shared.module";
import { EnterpriseDashboardRoutingModule } from "./enterprise-dashboard-routing.module";
import { CreateComponent } from "./enterprise-dashboard-price/create/create.component";
import { EditComponent } from './enterprise-dashboard-price/edit/edit.component';

@NgModule({
  declarations: [
    EnterpriseDashboardLayoutComponent,
    EnterpriseDashboardHomeComponent,
    EnterpriseDashboardPriceComponent,
    EnterpriseDashboardBookingComponent,
    EnterpriseDashboardOrderComponent,
    EnterpriseDashboardShipingComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [CommonModule, SharedModule, EnterpriseDashboardRoutingModule],
})
export class EnterpriseDashboardModule {}
