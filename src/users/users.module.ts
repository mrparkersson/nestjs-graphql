import { UserResolver } from './users.resolver';
import { UserService } from './users.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [UserService, UserResolver],
})
export class UsersModule {}
