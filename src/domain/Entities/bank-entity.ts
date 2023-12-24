import {UserEntity} from "./user-entity";

export class BankEntity {
    constructor(public user: UserEntity) {
    }

    public register():  string|void {
        if (this.user.isRegistered) {
            return `The user ${this.user.name} has been registered.`;
        }

        this.user.isRegistered = true;
    }
}
