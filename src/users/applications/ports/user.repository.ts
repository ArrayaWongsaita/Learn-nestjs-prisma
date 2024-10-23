import { IUser } from '../domains/user.domains';

const userRepositoryTokenSymbol: unique symbol = Symbol('UserRepository');
export const UserRepositoryToken = userRepositoryTokenSymbol.toString();

export interface UserRepository {
  create(user: IUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  // findById(id: number): Promise<IUser>;
  // findByUsername(username: string): Promise<IUser>;
  // update(user: IUser): Promise<IUser>;
  // delete(id: number): Promise<void>;
}
