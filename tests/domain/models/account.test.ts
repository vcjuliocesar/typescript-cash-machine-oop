import { Account } from "../../../src/domain/models/account"
import { UserEntity } from "../../../src/domain/models/user"

describe('Account', () => {
    it('return an exception if user is not register', () => {
        const name = 'Jhon Doe'

        const email = 'jhon.doe@gmail.com'

        const user = new UserEntity(name, email)

        expect(() => {
            new Account(user)
        }).toThrow()
    })

    it('throws an error for an empty string', () => {
        
        const user = new UserEntity('', '')

        expect(() => {
            new Account(user)
        }).toThrow('El campo nombre no puede ser vacio')
    })

})