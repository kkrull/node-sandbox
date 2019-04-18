import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard';
import { CallbackComponent } from './login/callback.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationService, WindowNavigationService } from './services/window-navigation.service';

@NgModule({
  declarations: [
    CallbackComponent,
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    AuthGuard,
    { provide: NavigationService, useClass: WindowNavigationService }
  ],
  exports: [RouterModule]
})
export class AuthModule { }
