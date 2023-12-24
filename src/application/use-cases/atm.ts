import {DebitEntity} from "../../domain/Entities/debit-entity";
import {CreditEntity} from "../../domain/Entities/credit-entity";
import {AtmService} from "../../domain/services/atm-operation-service";

export class Atm {
    private readonly atmService: AtmService;

    constructor(account: DebitEntity | CreditEntity) {
        this.atmService = new AtmService(account);
    }

    public withdraw(quantity: number) {
        if ( quantity <= 0 ) {
            throw new Error(`Indica una cantidad mayor a ${quantity}`)
        }

        return this.atmService.withdraw(quantity);
    }

    public balance() {
        return this.atmService.balance();
    }

    public saving(quantity: number) {
        return this.atmService.saving(quantity);
    }

    public pay(amount: number) {
        return this.atmService.pay(amount);
    }
}
