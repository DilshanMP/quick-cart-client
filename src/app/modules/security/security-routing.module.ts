import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContextComponent} from '../process/context/context.component';
import {HomepageComponent} from '../process/compponets/homepage/homepage.component';
import {SecurityContextComponent} from './componnent/security-context/security-context.component';
import {LoginComponent} from './componnent/login/login.component';
import {SignupComponent} from './componnent/signup/signup.component';
import {OtpVerificationComponent} from './componnent/otp-verification/otp-verification.component';
import {ResetPasswordComponent} from './componnent/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './componnent/forgot-password/forgot-password.component';

const routes: Routes = [
  {path : '',redirectTo:'/security/context',pathMatch:'full'},
  {path:'context' , component:SecurityContextComponent, children: [
      {path : '',redirectTo:'/security/context/login',pathMatch:'full'},
      {path :'login', component:LoginComponent},
      {path :'signup', component:SignupComponent},
      {path :'confirm-otp', component:OtpVerificationComponent},
      {path :'reset-password', component:ResetPasswordComponent},
      {path :'forgot-password', component:ForgotPasswordComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
