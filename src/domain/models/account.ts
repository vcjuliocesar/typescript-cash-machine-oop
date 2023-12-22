import { Credit } from "./credit";
import { Debit } from "./debit";
import { UserEntity } from "./user";

export class Account {

    constructor(
        public user: UserEntity,
        private _debit:Debit = new Debit(),
        private _credit:Credit = new Credit()) {


        if (!user.name || user.name.length === 0) {
        
            throw new Error(`El campo nombre no puede ser vacio`)
        
        }

        if (!user.email || user.email.length === 0) {

            throw new Error(`El campo email no puede ser vacio`)
        
        }

        if (!user.statusRegister()) {

            throw new Error(`El usuario ${user.name} no está registrado`)

        }

        //this._debit = new Debit()
        //this._credit = new Credit()
    }

    get debit() {
        return this._debit
    }

    get credit() {
        return this._credit
    }


}