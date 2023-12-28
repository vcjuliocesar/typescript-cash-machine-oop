export class UserDto {
    constructor(public name: string, public email: string) {}

    public validate(): void {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error(`El campo nombre no puede ser vacio`)
        }

        if (!this.email || this.email.trim().length === 0) {
            throw new Error(`El campo email no puede ser vacio`)
        }
    }
}
