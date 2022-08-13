import { DeleteUser } from './dto/inputs/delete-user-input';
import { GetUsersArgs } from './dto/args/getusers-args';
import { GetUserArgs } from './dto/args/getuser-args';
import { UpdateUserInput } from './dto/inputs/update-user-input';
import { CreateUserInput } from './dto/inputs/create-user-input';
import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  public createUser(createUserInput: CreateUserInput): User {
    const founderUser = this.users.find(
      (user) => user.email === createUserInput.email,
    );
    if (founderUser) {
      return;
    }
    const newUser: User = {
      userId: uuidv4(),
      ...createUserInput,
    };

    this.users.push(newUser);
    return newUser;
  }

  public updateUser(updateUserInput: UpdateUserInput): User {
    const foundUser = this.users.find(
      (user) => user.userId === updateUserInput.userId,
    );
    Object.assign(foundUser, updateUserInput);
    return foundUser;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.userId === getUserArgs.userId);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  public deleteUser(deleteUser: DeleteUser): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === deleteUser.userId,
    );

    const user = this.users[userIndex];
    this.users.splice(userIndex);

    return user;
  }
}
