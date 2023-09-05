import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
//tag::importAngularSDK[]
import {FusionAuthModule} from "@fusionauth/angular-sdk";
//end::importAngularSDK[]
import {AccountPageComponent} from './account-page/account-page.component';
import {MakeChangePageComponent} from './make-change-page/make-change-page.component';
//tag::importAuthGuard[]
import {authGuard} from "./auth-guard";
//end::importAuthGuard[]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountPageComponent,
    MakeChangePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //tag::routerConfiguration[]
    RouterModule.forRoot([
      {path: '', component: HomePageComponent, canActivate: [authGuard(false, '/account')]},
      {path: 'account', component: AccountPageComponent, canActivate: [authGuard(true, '/')]},
      {path: 'make-change', component: MakeChangePageComponent, canActivate: [authGuard(true, '/')]},
    ]),
    //end::routerConfiguration[]
    //tag::fusionAuthModuleConfiguration[]
    FusionAuthModule.forRoot({
      clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
      serverUrl: 'http://localhost:9011',
      redirectUri: 'http://localhost:4200',
    }),
    //end::fusionAuthModuleConfiguration[]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
