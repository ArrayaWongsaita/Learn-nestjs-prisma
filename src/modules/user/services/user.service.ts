// user service

import { ConflictException, Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  UserRepositoryToken,
} from '../interfaces/repositories/user.repository.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserBuilder } from '../entities/builders/user.builder';
import { Builder } from 'builder-pattern';
import { v7 as uuidV7 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: IUserRepository,
  ) {}

  async createUser({
    username,
    password,
    confirmPassword,
    email,
  }: CreateUserDto) {
    if (password !== confirmPassword) {
      throw new ConflictException('Passwords do not match');
    }
    const existingUser = await this.userRepository.findByUsernameOrEmail(
      username,
      email,
    );
    if (existingUser) {
      if (existingUser.email === email) {
        throw new ConflictException('Email already exists');
      }
      if (existingUser.username === username) {
        throw new ConflictException('Username already exists');
      }
    }
    const user = Builder(UserBuilder)
      .id(uuidV7())
      .username(username)
      .email(email)
      .build();

    user.setHashedPassword(password);

    return this.userRepository.create(user);
  }
}
