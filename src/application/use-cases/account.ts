import {AccountEntity} from "../../domain/Entities/account-entity";
import {UserEntity} from "../../domain/Entities/user-entity";

export class Account {

    private readonly account: AccountEntity;

    constructor(public user: UserEntity) {
        this.account = new AccountEntity(this.user);
    }

    public create() {
        return this.account;
    }
}
