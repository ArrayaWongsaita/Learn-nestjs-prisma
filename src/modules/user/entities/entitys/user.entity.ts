import { User as userPrisma } from '@prisma/client';

export class User implements Omit<userPrisma, 'createdAt' | 'updatedAt'> {
  constructor(
    public id: string,
    public email: string,
    public hashedPassword: string,
    public username: string,
  ) {}
}

export interface IUser extends Omit<userPrisma, 'createdAt' | 'updatedAt'> {
  comparePassword(password: string): Promise<boolean>;
  setHashedPassword(password: string): Promise<void>;
}
