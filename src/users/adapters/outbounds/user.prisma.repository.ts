import { Injectable, Inject, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { IUser, User } from 'src/users/applications/domains/user.domains';
import { Builder } from 'builder-pattern';
import { UserRepository } from 'src/users/applications/ports/user.repository';
import { PrismaToken } from 'src/configs/prisma/prisma.config';


@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(
    @Inject(PrismaToken) private readonly prisma: PrismaClient,
  ) {}

  async create(user: IUser): Promise<IUser> {
    // ตรวจสอบว่ามีผู้ใช้ที่มีอีเมลเดียวกันอยู่แล้วหรือไม่
    const existingUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      // ใช้ ConflictException แทนการโยนข้อผิดพลาดทั่วไป
      throw new ConflictException('Email already in use');
    }

    // สร้างผู้ใช้ใหม่
    const userCreated = await this.prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        hashedPassword: user.hashedPassword,
      },
    });

    return UserPrismaRepository.toDomain(userCreated);
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      // ใช้ NotFoundException แทนการโยนข้อผิดพลาดทั่วไป
      throw new NotFoundException('Email not found');
    }
    return UserPrismaRepository.toDomain(user);
  }

  static toDomain(user: PrismaUser): IUser {
    if (!user) {
      // ใช้ BadRequestException แทนการโยนข้อผิดพลาดทั่วไป
      throw new BadRequestException('Invalid user data');
    }
    return Builder(User)
      .id(user.id)
      .username(user.username)
      .email(user.email)
      .hashedPassword(user.hashedPassword)
      .createdAt(user.createdAt)
      .updatedAt(user.updatedAt)
      .build();
  }
}