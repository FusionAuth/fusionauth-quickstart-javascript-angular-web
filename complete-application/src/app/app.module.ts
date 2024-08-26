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
      clientId: "9005c46b-87ff-4e42-893e-2d43ffd3e653",
      redirectUri: "https://fusionauth-quickstart-javascript-angular-web.cashcat.dev",
      postLogoutRedirectUri: "https://fusionauth-quickstart-javascript-angular-web.cashcat.dev",
      serverUrl: "https://auth.cashcat.dev",
      scope: 'openid email profile offline_access',
      shouldAutoRefresh: true,
    }),
    //end::fusionAuthModuleConfiguration[]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
