import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  email: string;
}

export const productSchema = SchemaFactory.createForClass(Product);