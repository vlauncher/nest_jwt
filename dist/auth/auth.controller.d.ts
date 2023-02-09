import { Request } from "express";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<any>;
    signin(data: CreateAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(req: Request): void;
    refreshTokens(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
