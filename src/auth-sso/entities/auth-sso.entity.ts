import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemsDocument = HydratedDocument<AuthSso>;

@Schema()
export class AuthSso {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const AuthSsoSchema = SchemaFactory.createForClass(AuthSso);
