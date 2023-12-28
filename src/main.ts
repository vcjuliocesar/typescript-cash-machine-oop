import {User} from "./application/use-cases/user";
import {Bank} from "./application/use-cases/bank";
import {Account} from "./application/use-cases/account";
import {UserDto} from "./application/dto/userDto";
import {Atm} from "./application/use-cases/atm";

try {
    const userDto = new UserDto('John Doe', 'john@example.com');

    userDto.validate();

    const user = (new User(userDto)).create();

    (new Bank(user)).register();

    const account = (new Account(user)).create();

    console.log(account);

    let atm = new Atm(account.debit);
    console.log(atm);

    console.log("DebitEntity balance:", atm.balance());

    atm.withdraw(100);
    console.log('balance después de retirar $100', atm.balance());

    atm.saving(20);
    console.log('balance después de depositar $20', atm.balance());

    console.log(':::::::::::::::::::::::::::');

    let atmCredit = new Atm(account.credit);
    console.log(atmCredit);

    console.log("CreditEntity balance:", atmCredit.balance())

    atmCredit.withdraw(10);

    console.log('Crédito: balance después de retirar $10 - comisión 5%', atmCredit.balance());

    console.log("CreditEntity balance", atmCredit.balance())

    atmCredit.pay(20);

    console.log("CreditEntity balance", atmCredit.balance());
} catch (error) {
    console.log(error);
}

