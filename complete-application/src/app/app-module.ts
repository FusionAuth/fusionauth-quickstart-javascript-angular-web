import { RouterModule } from '@angular/router';
import { authGuard } from './auth-guard';

import { FusionAuthModule } from '@fusionauth/angular-sdk';

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //tag::fusionAuthModuleConfiguration[]
    FusionAuthModule.forRoot({
      clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
      serverUrl: 'http://localhost:9011',
      redirectUri: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200/logged-out',
      scope: 'openid email profile offline_access',
      shouldAutoRefresh: true,
    }),
    //end::fusionAuthModuleConfiguration[]
    RouterModule.forRoot([
      {
        path: '',
        loadComponent: () =>
          import('./home-page/home-page').then(
            (m) => m.HomePage
          ),
        canActivate: [authGuard(false, '/account')],
      },
      {
        path: 'logged-out',
        loadComponent: () =>
          import('./home-page/home-page').then(
            (m) => m.HomePage
          ),
        canActivate: [authGuard(false, '/account')],
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./account-page/account-page').then(
            (m) => m.AccountPage
          ),
        canActivate: [authGuard(true, '/')],
      },
      {
        path: 'make-change',
        loadComponent: () =>
          import('./make-change-page/make-change-page').then(
            (m) => m.MakeChangePage
          ),
        canActivate: [authGuard(true, '/')],
      },
    ]),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
