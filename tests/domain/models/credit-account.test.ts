import { Credit } from "../../../src/domain/models/credit"
import { UserEntity } from "../../../src/domain/models/user"
import { FEE, INITIALIZE_CREDIT_BALANCE_AMOUNT } from "../../../src/domain/value_objects"

describe('Credit account',()=>{
    it('returns an exception if amount is zero',()=>{
        
        const name = 'Jhon Doe'
        
        const email = 'jhon.doe@yopmail.com'

        const amount = 0

        const user = new UserEntity(name,email)

        user.register()

        const account = new Credit()

        expect(()=>{
            account.with_drawal(amount)
        }).toThrow(`Indica una cantidad mayor a ${amount}`)
    })

    it('returns an exception if amount is greater than balance',()=>{
        
        const name = 'Jhon Doe'
        
        const email = 'jhon.doe@yopmail.com'

        const amount = 10000000

        const user = new UserEntity(name,email)

        user.register()

        const account = new Credit()

        expect(()=>{
            account.with_drawal(amount)
        }).toThrow(`La cantidad ${amount} es mayor al saldo disponible`)
    })

    it('returns credit amount balance',()=>{
        
        let amount = 100

        const account = new Credit()

        account.with_drawal(amount)

        amount += amount * FEE

        expect(account.balance()).toBe(INITIALIZE_CREDIT_BALANCE_AMOUNT - amount)
    })

    it('returns an exception if amount is greater than LIMIT_CREDIT',()=>{
        
        let amount = 400001

        const account = new Credit()

        expect(()=>{
            account.pay(amount)
        }).toThrow(`La cantidad ${amount} supera el limite de credito`)
    })
})