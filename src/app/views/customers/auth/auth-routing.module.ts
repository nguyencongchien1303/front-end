import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const auth_routes: Routes = [
    { path: '', redirectTo: 'customer/login', pathMatch: 'full' },
    { path: 'customer/login', component: HomeLoginComponent },
    {
        path: 'customer/auth',
        component: AuthLayoutComponent,
        children: [
            { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password', component: ResetPasswordComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(auth_routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
