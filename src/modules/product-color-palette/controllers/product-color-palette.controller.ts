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
import { ProductColorPaletteService } from '../services/product-color-palette.service';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/jsonwebtoken/jwtAuth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ROLES } from 'src/shared/constants/roles.constants';
import { CreateProductColorPaletteDto } from '../dtos/create-product-color-palette.dto';
import { getAllProductColorPaletteByProductCollectionIdDto } from '../dtos/get-all-product-color-palette-by-product-collection-id.dto';
import { ProductColorPalette } from '../entities/product-color-palette.entity';

@Controller('product-color-palette')
export class ProductColorPaletteController {
  constructor(
    private readonly productColorPaletteService: ProductColorPaletteService,
  ) {}

  @Post()
  @Version('1')
  @ApiOperation({ summary: 'create Color Palette type' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLES.ADMIN)
  @UsePipes(ValidationPipe)
  async createProductColorPalette(
    @Body() createProductColorPaletteDto: CreateProductColorPaletteDto,
  ) {
    return this.productColorPaletteService.createProductColorPalette(
      createProductColorPaletteDto,
    );
  }

  @Get('/:productCollectionId')
  @Version('1')
  @ApiOperation({
    summary: 'get all Color Palette type by product collection id',
  })
  @UsePipes(ValidationPipe)
  async getAllProductColorPaletteByProductCollectionId(
    @Param() params: getAllProductColorPaletteByProductCollectionIdDto,
  ): Promise<ProductColorPalette[]> {
    const { productCollectionId } = params;
    return await this.productColorPaletteService.getAllProductColorPaletteByProductCollectionId(
      productCollectionId,
    );
  }
}
