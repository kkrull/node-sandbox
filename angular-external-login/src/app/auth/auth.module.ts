import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AUTH_ROUTES } from './auth.routes';
import { ChangeToExternalSignInUrl } from './change-to-sign-in-url.resolve';
import { CallbackComponent } from './login/callback.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    RouterModule.forChild(AUTH_ROUTES)
  ],
  declarations: [
    CallbackComponent,
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    ChangeToExternalSignInUrl
  ],
  exports: [RouterModule]
})
export class AuthModule { }
