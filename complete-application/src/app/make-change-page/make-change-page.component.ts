import { Component } from '@angular/core';

@Component({
  selector: 'app-make-change-page',
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
