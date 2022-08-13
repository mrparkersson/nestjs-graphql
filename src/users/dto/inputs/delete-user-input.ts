import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteUser {
  @Field()
  @IsNotEmpty()
  userId: string;
}
