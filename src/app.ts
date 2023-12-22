import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Mateus", 10);

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 20);

const premiumAccount: PremiumAccount = new PremiumAccount('João', 30)

console.log(companyAccount.getLoan(1000));
console.log(companyAccount.deposit(10));

console.log(peopleAccount.deposit(100));
console.log(peopleAccount.withdraw(50));

console.log(premiumAccount.deposit(100));
