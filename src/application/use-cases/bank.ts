import {UserEntity} from "../../domain/Entities/user-entity";
import {BankEntity} from "../../domain/Entities/bank-entity";

export class Bank {
    private readonly bank: BankEntity;

    constructor(public user: UserEntity) {
        this.bank = new BankEntity(this.user);
    }

    public register():  string|void {
        return this.bank.register();
    }
}
