/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import * as mongoose from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  username: string;
  @Prop()
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
export interface User extends mongoose.Document {
  username: string;
  password: string;
}
