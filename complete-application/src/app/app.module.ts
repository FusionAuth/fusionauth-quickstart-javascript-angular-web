import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
import {FusionAuthModule} from "@fusionauth/angular-sdk";
import {AccountPageComponent} from './account-page/account-page.component';
import {authGuard} from "./auth-guard";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent, canActivate: [authGuard(false, '/account')]},
      {path: 'account', component: AccountPageComponent, canActivate: [authGuard(true, '/')]}
    ]),
    FusionAuthModule.forRoot({
      clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
      serverUrl: 'http://localhost:9011',
      redirectUri: 'http://localhost:4200',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
