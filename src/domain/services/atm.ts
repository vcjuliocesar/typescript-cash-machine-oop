import { Credit } from "../models/credit";
import { Debit } from "../models/debit";

export class ATM {

    constructor(private account:Debit | Credit) {}

    balance() {
        try {
            return this.account.balance()
        } catch (error) {
            console.log(error)
        }
    }

    with_drawal(amount:number){
        try {
            return this.account.with_drawal(amount)
        } catch (error) {
            console.log(error)
        }
    }

    saving(amount:number){
        try {
            if (this.account instanceof Credit) {
                throw new Error('No se puede ahorrar en una cuenta de credito')
            }

            return this.account.saving(amount)
        } catch (error) {
            console.log(error)
        }
    }

    pay(amount:number) {
        try {

            if(this.account instanceof Debit) {
                throw new Error("No se puede pagar con una cuenta de debito")
            }
            
            return this.account.pay(amount)
        } catch (error) {
            console.log(error)
        }
    }
}