import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/users/user.module";
import { jwtConstants } from "./shared/auth.constants";
import { AuthController } from "./auth.controller";
import { AuthService } from "./shared/auth.service";
import { LocalStrategy } from "./shared/auth.strategy";
import { JwtStrategy } from "./shared/jwt.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s'}
        })
    ],
    controllers: [ AuthController ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    exports: [
        AuthService
    ]
})

export class AuthModule {}