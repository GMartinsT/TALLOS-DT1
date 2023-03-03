import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';
export class User extends Document {

    @IsNotEmpty({
        message: 'Nome de usuário deve ser único.'
    })
    @IsString({
        message: 'O nome precisa ser uma string.'
    })
    name: string;

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
        message: 'O cargo é obrigatório'
    })
    @IsString({
        message: 'O cargo deve ser uma sting.'
    })
    role: string
}