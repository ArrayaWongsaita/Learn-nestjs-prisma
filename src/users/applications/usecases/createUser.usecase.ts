import { Inject, Injectable } from '@nestjs/common';
import { UserRepository, UserRepositoryToken } from '../ports/user.repository';
import { IUser, User } from '../domains/user.domains';
import { CreateUserCommand } from './commands/createUser.commend';
import { Builder } from 'builder-pattern';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
  ) {}
  async execute({
    username,
    password,
    email,
  }: CreateUserCommand): Promise<IUser> {
    const user = Builder(User).id(uuidv4()).username(username).email(email).build();
    user.setHashedPassword(password);
    console.log('user', user);
    return await this.userRepository.create(user);
  }
}
