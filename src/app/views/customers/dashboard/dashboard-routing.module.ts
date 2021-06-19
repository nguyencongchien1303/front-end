import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardBookingComponent } from "./dashboard-booking/dashboard-booking.component";
import { DashboardCheckoutComponent } from "./dashboard-checkout/dashboard-checkout.component";
import { DashboardHistoryReviewsComponent } from "./dashboard-history-reviews/dashboard-history-reviews.component";
import { DashboardHistoryComponent } from "./dashboard-history/dashboard-history.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { DashboardManageComponent } from "./dashboard-manage/dashboard-manage.component";
import { DashboardProfileComponent } from "./dashboard-profile/dashboard-profile.component";
import { DashboardServiceComponent } from "./dashboard-service/dashboard-service.component";

const dashboard_routes: Routes = [
  {
    path: "customer/dashboard",
    component: DashboardLayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: DashboardHomeComponent },
      { path: "service", component: DashboardServiceComponent },
      {
        path: "service/service-checkout",
        component: DashboardCheckoutComponent,
        // data: data,
      },
      { path: "booking", component: DashboardBookingComponent },
      { path: "manage", component: DashboardManageComponent },
      { path: "history", component: DashboardHistoryComponent },
      {
        path: "history/history-reviews/:id",
        component: DashboardHistoryReviewsComponent,
      },
      { path: "profile", component: DashboardProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboard_routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
