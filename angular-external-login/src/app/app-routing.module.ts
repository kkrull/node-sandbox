import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { ChangeToExternalUrl } from './login/services/change-to-external-url.resolve';
import { ExternalUrlResolverToken } from './login/services/tokens';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    GuardedComponent,
    LoginComponent,
    TutorialComponent
  ],
  providers: [
    {
      provide: ExternalUrlResolverToken,
      useClass: ChangeToExternalUrl
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
