import { Module } from '@nestjs/common';
import { ProductColorPaletteController } from './controllers/product-color-palette.controller';
import { ProductColorPaletteService } from './services/product-color-palette.service';
import { ProductColorPaletteRepositoryToken } from './interfaces/product-color-palette.repository.interface';
import { ProductColorPaletteRepository } from './repositories/product-color-palette.repository';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  controllers: [ProductColorPaletteController],
  providers: [
    ProductColorPaletteService,
    {
      provide: ProductColorPaletteRepositoryToken,
      useClass: ProductColorPaletteRepository,
    },
    {
      provide: PrismaServiceToken,
      useClass: PrismaService,
    },
  ],
})
export class ProductColorPaletteModule {}
