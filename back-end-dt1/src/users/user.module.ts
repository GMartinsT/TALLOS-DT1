import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserNameValidateConstraint } from "./user.name.validate";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        UserNameValidateConstraint
    ]
})
export class UserModule {}