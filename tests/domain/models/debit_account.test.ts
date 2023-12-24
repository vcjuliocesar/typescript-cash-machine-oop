// import { DebitEntity } from "../../../src/domain/Entities/debit"
// import { UserEntity } from "../../../src/domain/Entities/user-entity"
// import { INITIALIZE_BALANCE_AMOUNT,MAX_AMOUNT_AVAILABLE,MIN_AMOUNT_AVAILABLE} from "../../../src/domain/value_objects"
//
// describe('DebitEntity account',()=>{
//
//     it('returns an exception if amount is zero',()=>{
//
//         const name = 'Jhon Doe'
//
//         const email = 'jhon.doe@yopmail.com'
//
//         const amount = 0
//
//         const user = new UserEntity(name,email)
//
//         user.register()
//
//         const account = new DebitEntity()
//
//         expect(()=>{
//             account.with_drawal(amount)
//         }).toThrow(`Indica una cantidad mayor a ${amount}`)
//     })
//
//     it('returns an exception if amount is greater than balance',()=>{
//
//         const name = 'Jhon Doe'
//
//         const email = 'jhon.doe@yopmail.com'
//
//         const amount = 10000000
//
//         const user = new UserEntity(name,email)
//
//         user.register()
//
//         const account = new DebitEntity()
//
//         expect(()=>{
//             account.with_drawal(amount)
//         }).toThrow(`La cantidad ${amount} es mayor al saldo disponible`)
//     })
//
//     it('returns debit amount balance',()=>{
//
//         const amount = 100
//
//         const account = new DebitEntity()
//
//         account.with_drawal(amount)
//
//         expect(account.balance()).toBe(INITIALIZE_BALANCE_AMOUNT - amount)
//     })
//
//     it('saving debit amount balance',()=>{
//
//         const amount = 100
//
//         const account = new DebitEntity()
//
//         account.saving(amount)
//
//         expect(account.balance()).toBe(INITIALIZE_BALANCE_AMOUNT + amount)
//     })
//
//     it('returns an exception if amount is greater than MAX_AMOUNT_AVAILABLE',()=>{
//
//         const amount = 100000000
//
//         const account = new DebitEntity()
//
//         expect(()=>{
//             account.saving(amount)
//         }).toThrow(`No se permiten transacciones superiores o iguales a ${MAX_AMOUNT_AVAILABLE}`)
//     })
//
//     it('returns an exception if amount is less than MIN_AMOUNT_AVAILABLE',()=>{
//
//         const amount = 1
//
//         const account = new DebitEntity()
//
//         expect(()=>{
//             account.saving(amount)
//         }).toThrow(`No se permiten transacciones menores a ${MIN_AMOUNT_AVAILABLE}`)
//     })
//
//
// })
