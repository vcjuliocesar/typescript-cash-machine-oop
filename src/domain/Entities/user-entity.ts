export class UserEntity {

    public isRegistered = false;

    constructor(public name: string, public email: string) {
    }

    public profileInformation() {
        return { name: this.name, email: this.email };
    }
}
