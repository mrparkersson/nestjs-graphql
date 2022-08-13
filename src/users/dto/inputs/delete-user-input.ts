import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class DeleteUser {
  @Field()
  @IsNotEmpty()
  userId: string;
}
