import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CognitoAuthGuard } from './shared/services/auth/auth-guard';
import { CognitoOpenIdConnectService } from './shared/services/cognito/cognito-openid-connect.service';
import { ReadWriteStorage } from './shared/services/storage/read-write-storage.service';

import { APP_ROUTES } from './app.routes';
import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login/login-callback.component';
import { LogoutComponent } from './login/logout.component';
import { ChangeToExternalSignInUrl, OpenIdConnectService } from './login/services/change-to-sign-in-url.resolve';
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
    CognitoAuthGuard,
    { provide: OpenIdConnectService, useClass: CognitoOpenIdConnectService },
    { provide: ReadWriteStorage, useValue: localStorage },
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
