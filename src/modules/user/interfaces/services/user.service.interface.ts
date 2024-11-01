// user service interface

import { User } from '../../entities/entitys/user.entity';

export interface IUserService {
  create(user: User): Promise<User>;
  findByUsernameOrEmail(username: string, email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
