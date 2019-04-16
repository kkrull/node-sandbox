import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login/login-callback.component';
import { ChangeToExternalUrl } from './login/services/change-to-external-url.resolve';
import { ReadWriteStorage } from './login/services/token-storage.service';
import { ExternalUrlResolverToken } from './login/services/tokens';
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
    TutorialComponent
  ],
  providers: [
    { provide: ExternalUrlResolverToken, useClass: ChangeToExternalUrl },
    { provide: ReadWriteStorage, useValue: localStorage },
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
