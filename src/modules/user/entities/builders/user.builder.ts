import * as bcrypt from 'bcrypt';
import { IUser } from '../entitys/user.entity';

export class UserBuilder implements IUser {
  id: string;
  email: string;
  username: string;
  hashedPassword: string;

  createdAt?: Date;
  updatedAt?: Date;

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.hashedPassword);
  }

  async setHashedPassword(password: string): Promise<void> {
    this.hashedPassword = bcrypt.hashSync(password, 10);
  }
}
