import {DebitInterface} from '../../interfaces/debit-interface'
import { INITIALIZE_BALANCE_AMOUNT,MAX_AMOUNT_AVAILABLE,MIN_AMOUNT_AVAILABLE } from '../value_objects'

export class DebitEntity implements DebitInterface {

    constructor(private initBalance = INITIALIZE_BALANCE_AMOUNT){
    }

    saving(amount: number): void {

        if (amount >= MAX_AMOUNT_AVAILABLE) {
            throw new Error(`No se permiten transacciones superiores o iguales a ${MAX_AMOUNT_AVAILABLE}`)
        }

        if (amount < MIN_AMOUNT_AVAILABLE) {
            throw new Error(`No se permiten transacciones menores a ${MIN_AMOUNT_AVAILABLE}`)
        }

        this.update_balance(this.balance() + amount)
    }

    balance(): number {
        return this.initBalance;
    }

    update_balance(balance: number) {
        return this.initBalance = balance;
    }

    withdraw(amount:number): number {

        if (this.initBalance == 0) {

            throw new Error('La cuenta esta vaciá')
        }

        if (amount > this.initBalance) {

            throw new Error(`La cantidad ${amount} es mayor al saldo disponible`)
        }

        return this.update_balance(this.balance() - amount);
    }
}
