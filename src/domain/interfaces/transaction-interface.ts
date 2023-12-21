export interface TransactionInterface{
    
    balance():number

    with_drawal(amount:number):number

    update_balance(balance:number):void
}