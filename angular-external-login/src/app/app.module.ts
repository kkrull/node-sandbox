import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { EnvironmentToken } from '../environments/environment.service';
import { ReadWriteStorage } from './shared/services/interfaces/read-write-storage.service';

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
    { provide: ReadWriteStorage, useValue: localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
