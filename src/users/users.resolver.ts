import { DeleteUser } from './dto/inputs/delete-user-input';
import { UpdateUserInput } from './dto/inputs/update-user-input';
import { CreateUserInput } from './dto/inputs/create-user-input';
import { GetUsersArgs } from './dto/args/getusers-args';
import { GetUserArgs } from './dto/args/getuser-args';
import { UserService } from './users.service';
import { User } from './models/user';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.userService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): User {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput): User {
    return this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUser') deleteUser: DeleteUser): User {
    return this.userService.deleteUser(deleteUser);
  }
}
