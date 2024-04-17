/* eslint-disable prettier/prettier */
import { Controller, Body, Post, Get, Req, UseGuards } from '@nestjs/common';
import {WalletService} from './wallet.service';
import {Request} from 'express'
import {AuthGuard} from '@nestjs/passport'
@Controller('wallet')
export class WalletController {
    constructor(private readonly walletService: WalletService){}
    @Get('/balance')
    @UseGuards(AuthGuard())
    async getUserBalance(@Req() req){
        const userId = req.user._id
        const balance = await this.walletService.getUserBalance(userId)
        return balance;
    }

    @Post('/deposit')
    @UseGuards(AuthGuard())
    async deposit(@Req() req, @Body() body:{amount:any}){
        const userId = req.user._id
        
        const {amount} = body
        const convertTointeger = parseFloat(amount)
      const deposit =  await this.walletService.deposit(userId, convertTointeger)
      if(deposit){
        return ({message:`You've sucessfully deposited an amount of ${amount} into your account`})
      }else{
        return({message:"Error while depositing"})
      }
    }

    @Post('/withdraw')
    @UseGuards(AuthGuard())
    async withdraw(@Req() req, @Body() body:{amount:number}){
        const userId = req.user._id
        const {amount} = body;
       const withdraw = await this.walletService.withdraw(userId, amount)
       if(withdraw){
        return ({message:`You've sucessfully withdraw an amount of ${amount}} from your account`})
      }
    }

    @Post('/transfer')
    @UseGuards(AuthGuard())
    async transfer(@Req() req, @Body() body:{receiverId:string, amount:number}){
        const senderId = req.user._id
        const {amount, receiverId} = body;
        await this.walletService.transfer(senderId, receiverId, amount)
    }
}
