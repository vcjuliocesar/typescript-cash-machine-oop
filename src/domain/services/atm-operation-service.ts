import { CreditEntity } from "../Entities/credit-entity";
import { DebitEntity } from "../Entities/debit-entity";

export class AtmService {
    private readonly account: DebitEntity | CreditEntity;

    constructor(account: DebitEntity | CreditEntity) {
        this.account = account;
    }

    balance() {
        return this.account.balance();
    }

    withdraw(amount: number){
        return this.account.withdraw(amount)
    }

    saving(amount:number){
        if (this.account instanceof CreditEntity) {
            throw new Error('No se puede ahorrar en una cuenta de crédito');
        }

        return this.account.saving(amount);
    }

    pay(amount:number) {
        if (this.account instanceof DebitEntity) {
            throw new Error("No se puede pagar con una cuenta de debito")
        }

        return this.account.pay(amount)
    }
}
