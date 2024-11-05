import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Version,
} from '@nestjs/common';
import { ProductSizeService } from '../services/product-size.service';
import { ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/shared/constants/roles.constants';
import { JwtAuthGuard } from 'src/common/jsonwebtoken/jwtAuth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CreateProductSizeDto } from '../dtos/create-product-size.dto';
import { ProductSize } from '../entities/product-size.entity';
import { getProductSizeByProductCollectionIdDto } from '../dtos/get-by-product-collection-id.dto';

@Controller('product-size')
export class ProductSizeController {
  constructor(private readonly productSizeService: ProductSizeService) {}

  @Post()
  @ApiOperation({ summary: 'create product type' })
  @Version('1')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLES.ADMIN)
  @UsePipes(ValidationPipe)
  async createProductSize(
    @Body() createProductSizeDto: CreateProductSizeDto,
  ): Promise<ProductSize> {
    return this.productSizeService.createProductSize(createProductSizeDto);
  }

  @Get('/:productCollectionId')
  @ApiOperation({ summary: 'get all product size by collection id' })
  @Version('1')
  @UsePipes(ValidationPipe)
  async getProductSizeByProductCollectionId(
    @Param()
    { productCollectionId }: getProductSizeByProductCollectionIdDto,
  ): Promise<ProductSize[]> {
    return this.productSizeService.getProductSizeByProductCollectionId(
      productCollectionId,
    );
  }
}
