import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
//import { Strategy } from 'passport-local';
import { jwtConstants } from "./auth.constants";


console.log(jwtConstants.secret);
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secret: jwtConstants.secret
        });
    }

    async validate(payload: any) {
        return { id: payload._id, email: payload.email };
    }
}