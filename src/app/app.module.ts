import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ApplicationService } from './app.initializer';
import { RouterModule, Routes } from '@angular/router';
import { Location, LOCATION_INITIALIZED } from '@angular/common';
import { HnResolver } from './app.resolver';
import { HnService } from 'src/app/app.service';
import { HttpClientModule } from '@angular/common/http';
import { SomeComponentComponent } from './some-component/some-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  {path: 'top', component: SomeComponentComponent, resolve: { message: HnResolver }}
];

@NgModule({
  declarations: [
    AppComponent,
    SomeComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    ],
  providers: [
    ApplicationService,
    {provide: APP_INITIALIZER, useFactory: app_Init, deps: [ApplicationService], multi: true},
    HnResolver,
    HnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function app_Init(appService: ApplicationService) {
  return () => appService.initializeApp();
}
