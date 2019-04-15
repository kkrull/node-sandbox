import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { ChangeToExternalUrl } from './login/services/change-to-external-url.resolve';
import { ExternalUrlResolverToken } from './login/services/external-url-resolver.token';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
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
