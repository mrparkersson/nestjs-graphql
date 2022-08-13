import { Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

export class GetUsersArgs {
  @Field(() => [String])
  @IsArray()
  userIds: string[];
}
