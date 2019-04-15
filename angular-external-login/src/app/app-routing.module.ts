import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot } from '@angular/router';

import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = 'http://www.google.com';
      }
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
