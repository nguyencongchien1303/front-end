import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseAuthLayoutComponent } from './enterprise-auth-layout/enterprise-auth-layout.component';
import { EnterpriseAuthSignupComponent } from './enterprise-auth-signup/enterprise-auth-signup.component';
import { EnterpriseLoginComponent } from './enterprise-login/enterprise-login.component';

const auth_routes: Routes = [
    { path: 'enterprise/login', component: EnterpriseLoginComponent },
    {
        path: 'enterprise/auth',
        component: EnterpriseAuthLayoutComponent,
        children: [
            { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
            { path: 'sign-up', component: EnterpriseAuthSignupComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(auth_routes)],
    exports: [RouterModule],
})
export class EnterpriseAuthRoutingModule { }
