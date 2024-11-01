// src/controllers/product-type.controller.ts
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  Version,
  UseGuards,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductTypeDto } from '../../dtos/product-type/create-product-type.dto';

import { JwtAuthGuard } from 'src/common/jsonwebtoken/jwtAuth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ROLES } from 'src/shared/constants/roles.constants';
import { multerOptions } from 'src/common/upload/multerOptions';
import * as fs from 'fs';
import { Roles } from 'src/common/decorators/roles.decorator';
import { FileValidationPipe } from 'src/common/pipe/fileValidation.pipe';
import { ProductTypeService } from '../../services/product-type/product-type.service';
import { ProductType } from '../../entities/entitys/product-type/product-type.entity';
import { ApiOperation } from '@nestjs/swagger';

@Controller('product-type')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) {}

  @Post()
  @ApiOperation({ summary: 'create product type' })
  @Version('1')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLES.ADMIN)
  @UseInterceptors(FileInterceptor('image', multerOptions))
  @UsePipes(FileValidationPipe)
  async createProductType(
    @Body() createProductTypeDto: CreateProductTypeDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ProductType> {
    try {
      const data = {
        name: createProductTypeDto.name,
        imageUrl: file.path,
      };
      const result = await this.productTypeService.createProductType(data);

      return result;
    } catch (error) {
      throw error;
    } finally {
      // Delete the file from the local uploads folder
      fs.unlink(file.path, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully');
        }
      });
    }
  }

  @Get()
  @ApiOperation({ summary: 'get all product type' })
  @Version('1')
  async getAllProductTypes(): Promise<ProductType[]> {
    return this.productTypeService.getAllProductTypes();
  }
}
