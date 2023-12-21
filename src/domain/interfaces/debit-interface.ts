import { TransactionInterface } from "./transaction-interface";

export interface DebitInterface extends TransactionInterface{
    
    saving(account:number): void

}