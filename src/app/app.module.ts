import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ApplicationService } from './app.initializer';
import { RouterModule } from '@angular/router';
import { Location, LOCATION_INITIALIZED } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([])
    ],
  providers: [
    ApplicationService,
    {provide: APP_INITIALIZER, useFactory: app_Init, deps: [ApplicationService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function app_Init(appService: ApplicationService) {
  return () => appService.initializeApp();
}
