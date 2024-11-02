import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  Version,
} from '@nestjs/common';
import { ProductCollectionService } from '../services/product-collection.service';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/jsonwebtoken/jwtAuth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/shared/constants/roles.constants';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/upload/multerOptions';
import { FileValidationPipe } from 'src/common/pipe/fileValidation.pipe';
import * as fs from 'fs';

import { createProductCollectionDto } from '../dtos/product-collection.dto';
import { ProductCollection } from '../entities/entitys/product-collection.entity';

@Controller('product-collection')
export class ProductCollectionController {
  constructor(
    private readonly productCollectionService: ProductCollectionService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'create Collection type' })
  @Version('1')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLES.ADMIN)
  @UseInterceptors(FileInterceptor('image', multerOptions))
  @UsePipes(FileValidationPipe)
  async createProductCollection(
    @Body() createProductCollectionDto: createProductCollectionDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ProductCollection> {
    try {
      if (!file) {
        throw new BadRequestException('No file uploaded');
      }
      const data = {
        name: createProductCollectionDto.name,
        imageUrl: file.path,
        productTypeId: createProductCollectionDto.productTypeId,
      };

      return await this.productCollectionService.createProductCollection(data);
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
  @ApiOperation({ summary: 'Get all Collection type' })
  @Version('1')
  async getAllProductCollections(): Promise<ProductCollection[]> {
    return await this.productCollectionService.getAllProductCollections();
  }
}
