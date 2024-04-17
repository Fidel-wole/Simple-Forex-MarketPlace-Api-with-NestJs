/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class Order {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;
  @Prop({ type: String, enum:['buy', 'sell'], required:true })
  type: number;
  @Prop()
  currencyPair:string
  @Prop({required:true})
  amount:number
}
export const OrderSchema = SchemaFactory.createForClass(Order);
export interface Order extends mongoose.Document {
  userId: string;
  type: number;
  currencyPair:string;
  amount:number
}
