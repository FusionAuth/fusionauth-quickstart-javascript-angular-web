import { Component } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent {

  balance = Math.ceil(Math.random() * 100000) / 100;

}
