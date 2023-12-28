import { CreditInterface } from "../../interfaces/credit-interface";
import { INITIALIZE_CREDIT_BALANCE_AMOUNT,FEE, LIMIT_CREDIT } from "../value_objects";
import { DebitEntity } from "./debit-entity";

export class CreditEntity implements CreditInterface {

    private initBalance: number = 0;

    constructor(debitAccount: DebitEntity) {
        debitAccount.update_balance(debitAccount.balance() - INITIALIZE_CREDIT_BALANCE_AMOUNT);
        this.initBalance = INITIALIZE_CREDIT_BALANCE_AMOUNT;
    }

    fee(amount:number): number {
        return amount * FEE
    }

    pay(amount:number): void {

        if (amount > LIMIT_CREDIT) {
            throw new Error(`La cantidad ${amount} supera el limite de crédito`)
        }

        if (LIMIT_CREDIT == 0) {
            throw new Error(`Excediste el limite de crédito de tu cuenta`)
        }

        this.update_balance(this.balance() - amount)
    }

    balance(): number {

        return this.initBalance
    }

    withdraw(amount: number): number {
        if (this.initBalance == 0) {

            throw new Error('La cuenta esta vaciá')
        }

        if (amount <= 0) {
            throw new Error(`Indica una cantidad mayor a ${amount}`)
        }

        if (amount > this.initBalance) {

            throw new Error(`La cantidad ${amount} es mayor al saldo disponible`)
        }

        amount += this.fee(amount)

        this.update_balance(this.initBalance - amount)

        return this.balance();
    }

    update_balance(balance: number): void {
        this.initBalance = balance
    }
}
