import {DebitInterface} from '../interfaces/debit-interface'
import { INITIALIZE_BALANCE_AMOUNT,MAX_AMOUNT_AVAILABLE,MIN_AMOUNT_AVAILABLE } from '../value_objects'

export class Debit implements DebitInterface{
    
    constructor(private init_balance:number = INITIALIZE_BALANCE_AMOUNT){}

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
        
        return this.init_balance
    }
    
    update_balance(balance: number): void {
        
        this.init_balance = balance
    }
    
    with_drawal(amount:number):number{

        if (this.init_balance == 0) {
            
            throw new Error('La cuenta esta vacia')
        }

        if( amount <= 0 ) {
            throw new Error(`Indica una cantidad mayor a ${amount}`)
        }

        if (amount > this.init_balance) {

            throw new Error(`La cantidad ${amount} es mayor al saldo disponible`)
        }

        this.update_balance(this.init_balance - amount)

        return this.balance()
    }
}