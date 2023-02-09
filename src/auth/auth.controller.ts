import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { AccessTokenGuard } from "../guards/accessToken.guard";
import { RefreshTokenGuard } from "src/guards/refreshToken.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post("login")
  signin(@Body() data: CreateAuthDto) {
    return this.authService.signIn(data);
  }

  @UseGuards(AccessTokenGuard)
  @Get("logout")
  logout(@Req() req: Request) {
    this.authService.logout(req.user["sub"]);
  }

  @UseGuards(RefreshTokenGuard)
  @Get("refresh")
  refreshTokens(@Req() req: Request) {
    const userId = req.user["sub"];
    const refreshToken = req.user["refreshToken"];
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
