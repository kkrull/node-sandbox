import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AUTH_ROUTES } from './auth.routes';
import { LoginComponent } from './login.component';
import { LoginCallbackComponent } from './login-callback.component';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [
    RouterModule.forChild(AUTH_ROUTES)
  ],
  declarations: [
    LoginComponent,
    LoginCallbackComponent,
    LogoutComponent
  ],
  providers: [],
  exports: [RouterModule]
})
export class AuthModule { }
