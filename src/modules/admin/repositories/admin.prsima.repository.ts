import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { IAdminRepository } from '../interfaces/repositories/admin.repository.interface';
import { Admin } from '../entities/entitys/admin.entitys';

@Injectable()
export class AdminRepository implements IAdminRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(admin: Admin): Promise<Admin> {
    const createdAdmin = await this.prisma.admin.create({
      data: {
        id: admin.id,
        email: admin.email,
        hashedPassword: admin.hashedPassword,
      },
    });
    return createdAdmin;
  }

  async findByEmail(email: string): Promise<Admin | null> {
    const admin = await this.prisma.admin.findUnique({ where: { email } });
    if (!admin) return null;
    return admin;
  }
}
