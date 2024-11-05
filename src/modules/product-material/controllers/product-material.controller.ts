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
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/jsonwebtoken/jwtAuth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/shared/constants/roles.constants';
import { ProductMaterial } from '../entities/product-material.entity';
import { CreateProductMaterialDto } from '../dtos/create-product-material.dto';
import { ProductMaterialService } from '../services/product-material.service';
import { GetAllProductMaterialByProductCollectionDto } from '../dtos/get-all-product-material-by-product-collection.dto';

@Controller('product-material')
export class ProductMaterialController {
  constructor(
    private readonly productMaterialService: ProductMaterialService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'create product material' })
  @Version('1')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLES.ADMIN)
  @UsePipes(ValidationPipe)
  async createProductMaterial(
    @Body() createProductMaterialDto: CreateProductMaterialDto,
  ): Promise<ProductMaterial> {
    return this.productMaterialService.createProductMaterial(
      createProductMaterialDto,
    );
  }

  @Get(':productCollectionId')
  @ApiOperation({ summary: 'get product material by product collection id' })
  @Version('1')
  @UsePipes(ValidationPipe)
  async getProductMaterialByProductCollectionId(
    @Param()
    { productCollectionId }: GetAllProductMaterialByProductCollectionDto,
  ): Promise<ProductMaterial[]> {
    return this.productMaterialService.getProductMaterialByProductCollectionId(
      productCollectionId,
    );
  }
}
