import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';
import { UserNameValidate } from './user.name.validate';
export class User {
    id: number;

    @UserNameValidate({
        message: "O nome de usuário precisa ser único."
    })
    @IsNotEmpty({
        message: 'Nome de usuário deve ser único.'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.'
    })
    userName: string;

    @IsEmail({}, {
        message: 'O e-mail precisa ser um endereço válido.'
    })
    email: string;

    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'A senha é obrigatório.'
    })
    password: string;

    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório.'
    })
    fullName: string;

    @IsNotEmpty({
        message: 'O cargo é obrigatório'
    })
    @IsString({
        message: 'O cargo deve ser uma sting.'
    })
    role: string
}