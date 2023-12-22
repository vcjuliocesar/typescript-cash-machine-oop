import { Account } from "../domain/models/account";
import { Credit } from "../domain/models/credit";
import { Debit } from "../domain/models/debit";
import { UserEntity } from "../domain/models/user";
import { ATM } from "../domain/services/atm";

const user = new UserEntity('Jhon Doe','jhon.doe@example.com')

user.register()

const account = new Account(user)

let atm = new ATM(account.debit)

const balance = atm.balance()

console.log("Debit balance:",balance)

atm.with_drawal(100)

console.log("Debit balance:",atm.balance())

atm.saving(200)

console.log("Debit balance:",atm.balance())

atm = new ATM(account.credit)

console.log("Credit balance:",atm.balance())

atm.with_drawal(100)

console.log("Credit balance",atm.balance())

atm.pay(200)

console.log("Credit balance",atm.balance())

