export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public set setName(v: string) {
    this.name = v;
  }

  public get getName(): string {
    return this.name;
  }

  
  public set setBalance(v : number) {
    this.balance = v;
  }

  
  public get getBalance() : number {
    return this.balance
  }
  
  

  deposit(value: number): number | boolean {
    if (this.validateStatus()) {
      this.balance += value;
      return this.balance;
    }
    throw new Error("Você não pode fazer depositos, favor procure a gerência!");
  }
  withdraw(value: number): number | boolean {
    if (this.validateStatus()) {
      if (this.balance > value) {
        this.balance -= value;
        return this.balance;
      } else {
        throw new Error("Você não tem saldo para saque!");
      }
    }
    throw new Error("Você não pode fazer saques, favor procure a gerência!");
  }

  getValue(): void {
    console.log(`R$ ${this.balance}`);
  }

  validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida.");
  }
}
