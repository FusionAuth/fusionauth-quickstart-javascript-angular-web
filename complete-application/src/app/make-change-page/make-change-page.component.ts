import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-make-change-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './make-change-page.component.html',
  styleUrls: ['./make-change-page.component.css']
})
export class MakeChangePageComponent {

  amount = 0;

  change: { total: number; nickels: number; pennies: number } | null = null;

  makeChange() {
    const total = this.amount;
    const nickels = Math.floor(this.amount / 0.05);
    const pennies = Math.round((this.amount - nickels * 0.05) * 100);
    this.change = {nickels, pennies, total};
  }

}
