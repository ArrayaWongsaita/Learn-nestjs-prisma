import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { AdminRepository } from '../repositories/admin.prisma.repository';

import { Builder } from 'builder-pattern';
import { AdminBuilder } from '../entities/builders/admin.builder';
import { v7 as uuidV7 } from 'uuid';
import { codeForAdmin } from 'src/config/create-admin-code.config';
import { CreateAdminDto } from '../dtos/create-Admin.dto';
import { AdminRepositoryToken } from '../interfaces/repositories/admin.repository.interface';

@Injectable()
export class AdminService {
  constructor(
    @Inject(AdminRepositoryToken)
    private readonly adminRepository: AdminRepository,
  ) {}

  async createAdmin({
    password,
    confirmPassword,
    email,
    code,
  }: CreateAdminDto) {
    if (code !== codeForAdmin) {
      throw new ConflictException('Invalid code');
    }
    if (password !== confirmPassword) {
      throw new ConflictException('Passwords do not match');
    }
    const existingAdmin = await this.adminRepository.findByEmail(email);
    if (existingAdmin) {
      throw new ConflictException('Email already exists');
    }
    const admin = Builder(AdminBuilder).id(uuidV7()).email(email).build();
    admin.setHashedPassword(password);
    return await this.adminRepository.create(admin);
  }
}
