import { UserEntity } from "./user";

export class Account {

    constructor(public user: UserEntity) {

        if (!user.name || user.name.length === 0) {
        
            throw new Error(`El campo nombre no puede ser vacio`)
        
        }

        if (!user.email || user.email.length === 0) {

            throw new Error(`El campo email no puede ser vacio`)
        
        }

        if (!user.statusRegister()) {

            throw new Error(`El usuario ${user.name} no está registrado`)

        }
    }


}