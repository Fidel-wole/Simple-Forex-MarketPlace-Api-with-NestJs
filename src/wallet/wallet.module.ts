/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import {MongooseModule } from '@nestjs/mongoose';
import {WalletSchema} from './wallet.model';
import { AuthModule } from '../auth/auth.module';
@Module({
 imports:[ AuthModule, MongooseModule.forFeature([{ name: 'Wallet', schema: WalletSchema }])],
  providers: [WalletService],
  controllers: [WalletController],
  exports:[WalletService]
})
export class WalletModule {}
