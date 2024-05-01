import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin-dto';
import { SignUpDto } from './dto/signup-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  authenticate(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('sign-up')
  create(@Body() signIUpDto: SignUpDto) {
    return this.authService.signUp(signIUpDto);
  }
}
