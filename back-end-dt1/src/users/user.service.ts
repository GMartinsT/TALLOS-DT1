import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    private users: Array<User> = [{
        id: 1,
        userName: 'Guilherme',
        email: 'guilherme@mail.com',
        password: '123456',
        fullName: 'Guilherme Martins',
        role: 'dev'
    }]

    public create(user: User): User {
        this.users.push(user)

        return user;
    }

    public searchByUsername(userName: string): User {
        const userFound = this.users.find(user => user.userName == userName);

        return userFound
    }
}