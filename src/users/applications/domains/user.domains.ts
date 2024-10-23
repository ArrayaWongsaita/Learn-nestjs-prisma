import * as bcrypt from 'bcrypt';
import { saltRounds } from 'src/configs/bcrypt.config';

export interface IUser {
  id?: string;

  email: string;
  username: string;
  hashedPassword: string;

  createdAt?: Date;
  updatedAt?: Date;

  comparePassword(password: string): Promise<boolean>;
  setHashedPassword(password: string): Promise<void>;
}

export class User implements IUser {
  id?: string;
  email: string;
  username: string;
  hashedPassword: string;

  createdAt?: Date;
  updatedAt?: Date;

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.hashedPassword);
  }

  async setHashedPassword(password: string): Promise<void> {
    this.hashedPassword = bcrypt.hashSync(password, saltRounds);
  }
}
