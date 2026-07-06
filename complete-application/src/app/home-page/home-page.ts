import { Component, inject } from '@angular/core';
import { FusionAuthService } from '@fusionauth/angular-sdk';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {
  private fusionAuthService = inject(FusionAuthService);

  login() {
    this.fusionAuthService.startLogin();
  }
  register() {
    this.fusionAuthService.startRegistration();
  }
}