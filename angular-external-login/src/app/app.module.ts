import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GuardedComponent } from './guarded/guarded.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    GuardedComponent,
    TutorialComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
