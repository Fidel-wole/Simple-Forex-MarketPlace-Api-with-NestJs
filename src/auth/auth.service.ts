/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import {WalletService} from '../wallet/wallet.service'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService,
    private readonly walletService:WalletService
  ) {}

  async findUser(username: string) {
    const user = this.userModel.findOne({username:username})
   return user;
  }
  async signup(signUpDto) {
    const { username, password } = signUpDto;
   // const hashpassword = bcrypt.hashSync(password, 10);

    const user = await this.userModel.create({
      username,
      password: password,
    });
    await this.walletService.createWallet(user._id)
    const token = this.jwtService.sign({ id: user._id });
    return { token};
  }
  async login(signInDto) {
    const { username, password } = signInDto;
    const user = await this.userModel.findOne({ username, password})
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (user.password != password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.jwtService.sign({ id: user._id });
    return {message:"User logged in successfully", token};
}
}