// src/common/pipes/file-validation.pipe.ts
import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  Scope,
  Inject,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { unlink } from 'fs/promises';
import { ValidationPipe } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class FileValidationPipe
  extends ValidationPipe
  implements PipeTransform<any>
{
  constructor(@Inject(REQUEST) private readonly request: Request) {
    super();
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (error) {
      if (error instanceof BadRequestException) {
        const file = this.request.file;
        if (file && file.path) {
          try {
            await unlink(file.path);
            console.log(`ลบไฟล์ที่ ${file.path} เรียบร้อยแล้ว`);
          } catch (err) {
            console.error('เกิดข้อผิดพลาดขณะลบไฟล์:', err);
          }
        }
      }
      throw error;
    }
  }
}
