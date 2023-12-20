import { UserEntity } from "../../../src/domain/models/user-entity";

describe('User Account',() => {
    it('can register a user',()=>{
        // Arrange
        const name = 'Jhon Doe'
        const email = 'jhon.doe@gmail.com'

        // Act
        const newUser = new UserEntity(name,email)

        newUser.register()

        // Assert
        expect(newUser.statusRegister()).toBe(true)
    })

    it('validates status when register is false',() => {
        // Arrange
        const name = 'Jhon Doe'
        const email = 'jhon.doe@gmail.com'

        // Act
        const newUser = new UserEntity(name,email)

        // Assert
        expect(newUser.statusRegister()).toBe(false)
    })
})