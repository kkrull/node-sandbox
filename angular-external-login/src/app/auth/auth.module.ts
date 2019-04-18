import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AUTH_ROUTES } from './auth.routes';
import { CallbackComponent } from './login/callback.component';
import { LoginComponent} from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationService, WindowNavigationService } from './window-navigation.service';

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
    { provide: NavigationService, useClass: WindowNavigationService }
  ],
  exports: [RouterModule]
})
export class AuthModule { }
