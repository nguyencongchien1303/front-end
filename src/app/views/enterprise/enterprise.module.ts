import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { EnterpriseAuthModule } from "./auth/enterpriseAuth.module";
import { EnterpriseDashboardModule } from "./enterprise-dashboard/enterprise-dashboard.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    EnterpriseAuthModule,
    EnterpriseDashboardModule,
  ],
})
export class EnterpriseModule {}
