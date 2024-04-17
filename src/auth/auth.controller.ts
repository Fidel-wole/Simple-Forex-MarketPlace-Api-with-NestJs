import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './dto/signup.dto';
import { signInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  async signUp(@Body() signUpDto: signUpDto): Promise<{ token: string }> {
    try{
      const findUser = await this.authService.findUser(signUpDto.username);
      if (findUser) {
        throw new UnauthorizedException('User already exists');
      }
      return await this.authService.signup(signUpDto);
    }catch(err:any){
      throw new Error(err)
    }
  
  }
  @Post('login')
  signIn(@Body() signInDto: signInDto){
    return this.authService.login(signInDto);
  }
}
