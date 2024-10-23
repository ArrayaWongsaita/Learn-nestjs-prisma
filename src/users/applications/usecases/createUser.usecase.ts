import { Inject, Injectable } from '@nestjs/common';
import { UserRepository, UserRepositoryToken } from '../ports/user.repository';
import { IUser, User } from '../domains/user.domains';
import { CreateUserCommand } from './commands/createUser.commend';
import { Builder } from 'builder-pattern';

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
    const user = Builder(User).username(username).email(email).build();
    user.setHashedPassword(password);
    console.log('user', user);
    return await this.userRepository.create(user);
  }
}
