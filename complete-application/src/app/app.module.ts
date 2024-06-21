import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//tag::importAngularSDK[]
import { FusionAuthModule } from '@fusionauth/angular-sdk';
//end::importAngularSDK[]
//tag::importAuthGuard[]
import { RouterModule } from '@angular/router';
import { authGuard } from './auth-guard';
//end::importAuthGuard[]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //tag::routerConfiguration[]
    RouterModule.forRoot([
      {
        path: '',
        loadComponent: () =>
          import('./home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
        canActivate: [authGuard(false, '/account')],
      },
      {
        path: 'logged-out',
        loadComponent: () =>
          import('./home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
        canActivate: [authGuard(false, '/account')],
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./account-page/account-page.component').then(
            (m) => m.AccountPageComponent
          ),
        canActivate: [authGuard(true, '/')],
      },
      {
        path: 'make-change',
        loadComponent: () =>
          import('./make-change-page/make-change-page.component').then(
            (m) => m.MakeChangePageComponent
          ),
        canActivate: [authGuard(true, '/')],
      },
    ]),
    //end::routerConfiguration[]
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
