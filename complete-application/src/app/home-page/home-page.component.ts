import {Component, inject} from '@angular/core';
import {FusionAuthService} from "@fusionauth/angular-sdk";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  private fusionAuthService = inject(FusionAuthService);

  login() {
    this.fusionAuthService.startLogin();
  }
}
