import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard, DiscordAuthGuard } from '../../utils/Guards';

@Controller('auth')
export class AuthController {
  @Get('discord/redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    console.log('Redirecting User...');
    res.redirect('http://localhost:3000/dashboard');
  }

  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return { msg: 'Login' };
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request, @Res() res: Response) {
    res.send(req.user);
  }

  @Post('logout')
  logout() {
    return {};
  }
}
