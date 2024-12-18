// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaModule } from './common/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/adimin.module';
import { ProductCollectionModule } from './modules/product-collection/product-collection.module';
import { ProductTypeModule } from './modules/product-type/product-type.module';
import { ProductColorPaletteModule } from './modules/product-color-palette/product-color-palette.module';
import { ProductSizeModule } from './modules/product-size/product-size.module';
import { ProductMaterialModule } from './modules/product-material/product-meaterial.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './public/assets',
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    AdminModule,
    ProductModule,
    ProductTypeModule,
    ProductCollectionModule,
    ProductColorPaletteModule,
    ProductSizeModule,
    ProductMaterialModule,
  ],
})
export class AppModule {}
