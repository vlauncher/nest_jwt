import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    signUp(createUserDto: CreateUserDto): Promise<any>;
    signIn(data: CreateAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: number): Promise<void>;
    refreshTokens(userId: number, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    hashData(data: string): Promise<string>;
    updateRefreshToken(userId: number, refreshToken: string): Promise<void>;
    getTokens(userId: number, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
