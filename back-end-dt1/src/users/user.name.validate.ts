import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator'
import { UserService } from "./user.service";

@Injectable()
@ValidatorConstraint()
export class UserNameValidateConstraint implements ValidatorConstraintInterface {

    constructor(private userService: UserService) {}

    validate(userName: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.userService.searchByUsername(userName)
    }
}

export function UserNameValidate(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UserNameValidateConstraint,
        })
    }
}
