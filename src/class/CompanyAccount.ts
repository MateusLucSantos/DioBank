import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(value: number): number | boolean {
    if (this.validateStatus()) {
      this.setBalance = this.getBalance + value;
      return this.getBalance;
    }
    throw new Error("Infelizmente não podemos lhe emprestar!");
  }

  deposit(value: number): number | boolean {
    this.setBalance = this.getBalance + value;
    return this.getBalance;
  }
}
