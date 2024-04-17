/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Wallet } from './wallet.model';
import { UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class WalletService {
  constructor(@InjectModel('Wallet') private walletModel: Model<Wallet>) {}
  
  async createWallet(userId: string): Promise<Wallet> {
    const wallet = new this.walletModel({ userId });
    return wallet.save();
  }
  async getUserBalance(userId: string) {
    const wallet = await this.walletModel.findOne({ userId: userId });
    return wallet ? wallet.balance : 0;
  }

  async deposit(userId: string, amount: number) {
    let wallet = await this.walletModel.findOne({ userId: userId });
    if (wallet) {
      wallet.balance += amount;
    }
   return await wallet.save(); 
  }
  async withdraw(userId: string, amount: number) {
    const wallet = await this.walletModel.findOne({ userId: userId });
    if (wallet && wallet.balance >= amount) {
      wallet.balance -= amount;
     return await wallet.save(); 
    } else {
      throw new Error('Insufficient funds');
    }
  }
  
  async transfer(senderId: string, receiverId: string, amount: number) {
    await this.withdraw(senderId, amount);
    await this.deposit(receiverId, amount);
  }
}
