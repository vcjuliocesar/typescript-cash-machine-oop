export interface TransactionInterface{

    balance():number

    withdraw(amount:number):number

    update_balance(balance:number):void
}
