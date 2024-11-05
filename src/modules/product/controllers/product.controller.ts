// product controller

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  Version,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/jsonwebtoken/jwtAuth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/shared/constants/roles.constants';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/upload/multerOptions';
import { FileValidationPipe } from 'src/common/pipe/fileValidation.pipe';
import { CreateProductDto } from '../dtos/create-product.dto';
import * as fs from 'fs';
import { Product } from '../entities/product.entity';
import { Decimal } from '@prisma/client/runtime/library';
import { GetProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialIdDto } from '../dtos/get-product-by-productCollection-id-and-productColorPalette-id-and-productMaterial-id.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'create Product type' })
  @Version('1')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLES.ADMIN)
  @UseInterceptors(FileInterceptor('image', multerOptions))
  @UsePipes(FileValidationPipe)
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Product> {
    try {
      if (!file) {
        throw new BadRequestException('No file uploaded');
      }
      const data = {
        name: createProductDto.name,
        basePrice: new Decimal(createProductDto.basePrice),
        imageUrl: file.path,
        productCollectionId: createProductDto.productCollectionId,
        productColorPaletteId: createProductDto.productColorPaletteId,
        productMaterialId: createProductDto.productMaterialId,
      };

      return await this.productService.createProduct(data);
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

  @Get('/:productCollectionId/:productColorPaletteId/:productMaterialId')
  @ApiOperation({
    summary:
      'get Product  by productCollectionId, productColorPaletteId and productMaterialId',
  })
  @Version('1')
  async getProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialId(
    @Param()
    {
      productCollectionId,
      productColorPaletteId,
      productMaterialId,
    }: GetProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialIdDto,
  ): Promise<Product> {
    return await this.productService.findProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialId(
      productCollectionId,
      productColorPaletteId,
      productMaterialId,
    );
  }
}
