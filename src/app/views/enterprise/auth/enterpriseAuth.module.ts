import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnterpriseLoginComponent } from "./enterprise-login/enterprise-login.component";
import { EnterpriseAuthRoutingModule } from "./enterpriseAuth-routing.module";
import { EnterpriseAuthLayoutComponent } from "./enterprise-auth-layout/enterprise-auth-layout.component";
import { EnterpriseAuthSignupComponent } from "./enterprise-auth-signup/enterprise-auth-signup.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    EnterpriseLoginComponent,
    EnterpriseAuthLayoutComponent,
    EnterpriseAuthSignupComponent,
  ],
  imports: [CommonModule, EnterpriseAuthRoutingModule, SharedModule],
})
export class EnterpriseAuthModule {}
