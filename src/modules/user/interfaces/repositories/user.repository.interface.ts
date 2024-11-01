// src/modules/user/domain/repositories/interfaces/user.repository.interface.ts

import { User } from '../../entities/entitys/user.entity';

const UserRepository: unique symbol = Symbol('UserRepository');
export const UserRepositoryToken = UserRepository.toString();

export interface IUserRepository {
  create(user: User): Promise<User>;
  findByUsernameOrEmail(username: string, email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
