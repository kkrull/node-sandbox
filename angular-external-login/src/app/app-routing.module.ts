import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthGuard } from './lib/auth-guard';
import { CognitoOpenIdConnectService } from './shared/services/cognito/cognito-openid-connect.service';
import { CognitoTokenStorageService } from './shared/services/cognito/token-storage-service';
import { TokenStorageService } from './shared/services/interfaces/token-storage.service';

import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './auth/login.component';
import { LoginCallbackComponent } from './auth/login-callback.component';
import { LogoutComponent } from './auth/logout.component';
import { ChangeToExternalSignInUrl, OpenIdConnectService } from './lib/change-to-sign-in-url.resolve';
import { GuardedComponent } from './guarded/guarded.component';
import { ReferenceComponent } from './reference/reference.component';

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
    ReferenceComponent
  ],
  providers: [
    ChangeToExternalSignInUrl,
    {
      provide: AuthGuard,
      deps: [TokenStorageService, Router],
      useFactory: (storage: TokenStorageService, router: Router) =>
        new AuthGuard(storage, router, ['/auth/login'])
    },
    { provide: OpenIdConnectService, useClass: CognitoOpenIdConnectService },
    { provide: TokenStorageService, useClass: CognitoTokenStorageService }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
