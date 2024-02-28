export class User { }
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = User & Document;

@Schema()
export class Cat {
    @Prop()
    name: string;

    @Prop()
    email: number;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);