/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WalletModule } from './wallet/wallet.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RateModule } from './rate/rate.module';
import { OrderController } from './order/order.controller';
// import { OrderModule } from './order/order.module';

@Module({
  imports: [ AuthModule, WalletModule, MongooseModule.forRoot("mongodb+srv://Fidel_Wole:2ql24UoUi4uN5302@cluster0.cwzz5uc.mongodb.net/forex"), RateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
