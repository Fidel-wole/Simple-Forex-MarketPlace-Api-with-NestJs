// /* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { OrderService } from './order.service';
// import { OrderController } from './order.controller';
// import { MongooseModule } from '@nestjs/mongoose';
// import { OrderSchema } from './order.model';
// import { WalletModule } from '../wallet/wallet.module';
// import { WalletService } from '../wallet/wallet.service';

// @Module({
//     imports:[WalletModule, MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema}])],
//   providers: [OrderService, WalletService],
//   controllers:[OrderController]
// })
// export class OrderModule {}
