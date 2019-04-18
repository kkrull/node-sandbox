import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { ReadWriteStorage } from './shared/services/interfaces/read-write-storage.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CognitoModule } from './plugins/cognito/cognito.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CognitoModule.forRoot(environment.identityProvider, {
      loginRoute: ['/auth', 'login']
    }),
    HttpClientModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: ReadWriteStorage, useValue: localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
