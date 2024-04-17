// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Order } from './order.model';

// @Injectable()
// export class OrderService {
//     constructor(
//         @InjectModel('Order') private readonly orderModel: Model<Order>
//     ){}
//     async placeOrder(userId:any, currencyPair:string, amount:number, type:string){
//         try{
//          const order = new this.orderModel({userId, currencyPair, amount, type})
//          if(order?.type === 'buy'){

//          }
//          return order.save()
//         }catch(err:any){
//             throw new Error(err)
//         }
//     }
// }
