import {Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: "select-amount",
  templateUrl: "./amount.component.html",
  styleUrls: ["./amount.component.less"]
})
export class AmountComponent {
  amount = 1;
  @Output() onSelectAmount = new EventEmitter();

  addAmount() {
    this.amount++;
    this.onSelectAmount.emit(this.amount)
  }

  reduceAmount() {
    if (this.amount > 0) {
      this.amount--;
    }
    this.onSelectAmount.emit(this.amount)
  }

  constructor() {
  }
}
