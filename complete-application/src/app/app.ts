import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FusionAuthService, UserInfo } from '@fusionauth/angular-sdk';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit, OnDestroy {
  private fusionAuthService: FusionAuthService = inject(FusionAuthService);

  isLoggedIn: boolean = this.fusionAuthService.isLoggedIn();
  userInfo: UserInfo | null = null;
  isGettingUserInfo: boolean = false;
  subscription?: Subscription;

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.subscription = this.fusionAuthService
        .getUserInfoObservable({
          onBegin: () => (this.isGettingUserInfo = true),
          onDone: () => (this.isGettingUserInfo = false),
        })
        .subscribe({
          next: (userInfo) => (this.userInfo = userInfo),
          error: (error) => console.error(error),
        });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  logout() {
    this.fusionAuthService.logout();
  }

  login() {
    this.fusionAuthService.startLogin();
  }
}