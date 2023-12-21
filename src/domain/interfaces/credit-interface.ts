import { TransactionInterface } from "./transaction-interface";

export interface CreditInterface extends TransactionInterface{

    fee(amount:number):number

    pay(amount:number):void
}