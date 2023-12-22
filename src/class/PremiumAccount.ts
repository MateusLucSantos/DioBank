import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  deposit(value: number): number | boolean {
    this.setBalance = this.getBalance + value + 10;
    return this.getBalance;
  }
}
