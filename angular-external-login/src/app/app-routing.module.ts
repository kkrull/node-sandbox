import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login/login-callback.component';
import { ChangeToExternalUrl, OpenIdConnectService } from './login/services/change-to-external-url.resolve';
import { ReadWriteStorage } from './login/services/token-storage.service';
import { ExternalUrlResolverToken } from './login/services/tokens';
import { TutorialComponent } from './tutorial/tutorial.component';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

class CognitoDiscoveryService extends OpenIdConnectService {
  authorizationUrl(): Observable<URL> {
    return of(new URL('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_N8OfbsdVa/.well-known/openid-configuration'));
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    GuardedComponent,
    LoginCallbackComponent,
    LoginComponent,
    TutorialComponent
  ],
  providers: [
    { provide: ExternalUrlResolverToken, useClass: ChangeToExternalUrl },
    { provide: OpenIdConnectService, useClass: CognitoDiscoveryService },
    { provide: ReadWriteStorage, useValue: localStorage },
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
