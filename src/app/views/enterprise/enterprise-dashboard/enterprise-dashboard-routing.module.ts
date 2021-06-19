import { EditComponent } from "./enterprise-dashboard-price/edit/edit.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnterpriseDashboardBookingComponent } from "./enterprise-dashboard-booking/enterprise-dashboard-booking.component";
import { EnterpriseDashboardHomeComponent } from "./enterprise-dashboard-home/enterprise-dashboard-home.component";
import { EnterpriseDashboardLayoutComponent } from "./enterprise-dashboard-layout/enterprise-dashboard-layout.component";
import { EnterpriseDashboardOrderComponent } from "./enterprise-dashboard-order/enterprise-dashboard-order.component";
import { CreateComponent } from "./enterprise-dashboard-price/create/create.component";
import { EnterpriseDashboardPriceComponent } from "./enterprise-dashboard-price/enterprise-dashboard-price.component";
import { EnterpriseDashboardShipingComponent } from "./enterprise-dashboard-shiping/enterprise-dashboard-shiping.component";

const auth_routes: Routes = [
  {
    path: "enterprise/dashboard",
    component: EnterpriseDashboardLayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: EnterpriseDashboardHomeComponent },
      {
        path: "price",
        component: EnterpriseDashboardPriceComponent,
      },
      { path: "price/create", component: CreateComponent },
      { path: "price/edit/:id", component: EditComponent },
      { path: "booking", component: EnterpriseDashboardBookingComponent },
      { path: "order", component: EnterpriseDashboardOrderComponent },
      { path: "shiping", component: EnterpriseDashboardShipingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(auth_routes)],
  exports: [RouterModule],
})
export class EnterpriseDashboardRoutingModule {}
