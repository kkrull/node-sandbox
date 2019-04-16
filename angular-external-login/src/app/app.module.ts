import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginCallbackComponent } from './login/login-callback.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [AppComponent, LoginCallbackComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
