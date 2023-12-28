import {UserEntity} from "../../domain/Entities/user-entity";
import { UserDto } from "../dto/userDto";

export class User {

    private readonly user: UserEntity;

    constructor(public userDto: UserDto) {
        this.user = new UserEntity(this.userDto.name, this.userDto.email);
    }

    public create() {
        return this.user;
    }
}
