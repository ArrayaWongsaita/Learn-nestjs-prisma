import { Injectable } from '@nestjs/common';
import { User } from '../entities/entitys/user.entity';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { IUserRepository } from '../interfaces/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        hashedPassword: user.hashedPassword,
        username: user.username,
      },
    });
    return new User(
      createdUser.id,
      createdUser.email,
      createdUser.hashedPassword,
      createdUser.username,
    );
  }

  async findByUsernameOrEmail(
    username: string,
    email: string,
  ): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    });
    if (!user) return null;
    return new User(user.id, user.email, user.hashedPassword, user.username);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) return null;
    return new User(user.id, user.email, user.hashedPassword, user.username);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    return new User(user.id, user.email, user.hashedPassword, user.username);
  }

  async update(user: User): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: {
        email: user.email,
        hashedPassword: user.hashedPassword,
        username: user.username,
      },
    });
    return new User(
      updatedUser.id,
      updatedUser.email,
      updatedUser.hashedPassword,
      updatedUser.username,
    );
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
