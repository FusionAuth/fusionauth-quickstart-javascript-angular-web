import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-page.html',
  styleUrls: ['./account-page.css']
})
export class AccountPage {

  balance = Math.ceil(Math.random() * 100000) / 100;

}