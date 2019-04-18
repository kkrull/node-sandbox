import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AUTH_ROUTES } from './auth.routes';
import { CallbackComponent } from './login/callback.component';
import { LocationService, LoginComponent, WindowLocationService } from './login/login.component';
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
    { provide: LocationService, useClass: WindowLocationService }
  ],
  exports: [RouterModule]
})
export class AuthModule { }
