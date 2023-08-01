import {Component, inject} from '@angular/core';
import {FusionAuthService, UserInfo} from "@fusionauth/angular-sdk";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private fusionAuthService: FusionAuthService = inject(FusionAuthService);

  isLoggedIn = false;
  userInfo$: Observable<UserInfo>;

  constructor() {
    this.isLoggedIn = this.fusionAuthService.isLoggedIn();
    this.userInfo$ = fromPromise(this.fusionAuthService.getUserInfo());

    this.fusionAuthService.getUserInfo().then(userInfo => {
      console.log(userInfo);
    })
  }

  logout() {
    this.fusionAuthService.logout();
  }

  login() {
    this.fusionAuthService.startLogin();
  }
}
