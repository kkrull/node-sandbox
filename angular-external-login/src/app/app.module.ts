import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { EnvironmentToken } from '../environments/environment.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: EnvironmentToken, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
