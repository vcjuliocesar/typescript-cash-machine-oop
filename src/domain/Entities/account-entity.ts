import {DebitEntity} from "./debit-entity";
import {CreditEntity} from "./credit-entity";
import {UserEntity} from "./user-entity";

export class AccountEntity {

    public debit: DebitEntity;
    public credit: CreditEntity;

    constructor(public user: UserEntity) {
        this.debit = new DebitEntity();
        this.credit = new CreditEntity(this.debit);
    }
}
