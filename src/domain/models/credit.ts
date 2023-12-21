import { CreditInterface } from "../interfaces/credit-interface";
import { INITIALIZE_CREDIT_BALANCE_AMOUNT,FEE, LIMIT_CREDIT } from "../value_objects";

export class Credit implements CreditInterface {

    constructor(
        private init_balance: number = INITIALIZE_CREDIT_BALANCE_AMOUNT
    ) { }

    fee(amount:number): number {
        return amount * FEE
    }
    
    pay(amount:number): void {
        
        if (amount > LIMIT_CREDIT) {
            throw new Error(`La cantidad ${amount} supera el limite de credito`)
        }

        if (LIMIT_CREDIT == 0) {
            throw new Error(`Excedite el limite de credito de tu cuenta`)
        }

        this.update_balance(this.balance() + amount)
    }

    balance(): number {
        
        return this.init_balance
    }

    with_drawal(amount: number): number {
        if (this.init_balance == 0) {

            throw new Error('La cuenta esta vacia')
        }

        if (amount <= 0) {
            throw new Error(`Indica una cantidad mayor a ${amount}`)
        }

        if (amount > this.init_balance) {

            throw new Error(`La cantidad ${amount} es mayor al saldo disponible`)
        }
        
        amount += this.fee(amount)

        this.update_balance(this.init_balance - amount)

        return this.balance()
    }

    update_balance(balance: number): void {
        this.init_balance = balance
    }
}