import { Admin as AdminPrisma } from '@prisma/client';

export class Admin implements Omit<AdminPrisma, 'createdAt' | 'updatedAt'> {
  constructor(
    public id: string,
    public email: string,
    public hashedPassword: string,
  ) {}
}

export interface IAdmin extends Omit<AdminPrisma, 'createdAt' | 'updatedAt'> {
  comparePassword(password: string): Promise<boolean>;
  setHashedPassword(password: string): Promise<void>;
}
