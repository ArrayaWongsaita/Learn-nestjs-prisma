import * as bcrypt from 'bcrypt';
import { IAdmin } from '../entitys/admin.entitys';

export class AdminBuilder implements IAdmin {
  id: string;
  email: string;
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
