import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CognitoAuthGuard } from './shared/services/cognito/cognito-auth-guard';
import { CognitoOpenIdConnectService } from './shared/services/cognito/cognito-openid-connect.service';
import { ReadWriteStorage } from './shared/services/storage/read-write-storage.service';

import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './auth/login.component';
import { LoginCallbackComponent } from './auth/login-callback.component';
import { LogoutComponent } from './auth/logout.component';
import { ChangeToExternalSignInUrl, OpenIdConnectService } from './auth/services/change-to-sign-in-url.resolve';
import { GuardedComponent } from './guarded/guarded.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    GuardedComponent,
    LoginCallbackComponent,
    LoginComponent,
    LogoutComponent,
    TutorialComponent
  ],
  providers: [
    ChangeToExternalSignInUrl,
    {
      provide: CognitoAuthGuard,
      deps: [ReadWriteStorage, Router],
      useFactory: (storage: ReadWriteStorage, router: Router) =>
        new CognitoAuthGuard(storage, router, ['/login'])
    },
    { provide: OpenIdConnectService, useClass: CognitoOpenIdConnectService },
    { provide: ReadWriteStorage, useValue: localStorage },
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
