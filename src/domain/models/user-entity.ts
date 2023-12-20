import { User } from "../interfaces/user"

export class UserEntity implements User{
    
    constructor(
        public name:string,
        public email:string,
        private registered:boolean = false
        ){}
    
    register():void{
        this.registered = true
    }

    statusRegister():boolean{
        return this.registered
    }
}