import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { GuardedComponent } from './guarded/guarded.component';
import { ReferenceComponent } from './reference/reference.component';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    GuardedComponent,
    ReferenceComponent
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
