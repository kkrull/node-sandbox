import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { ExternalUrlResolve } from './external-url.resolve';
import { ExternalUrlResolveToken } from './external-url-resolve.token';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    {
      provide: ExternalUrlResolveToken,
      useClass: ExternalUrlResolve
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
