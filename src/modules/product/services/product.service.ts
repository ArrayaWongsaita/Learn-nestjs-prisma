// product service

import { ConflictException, Inject, Injectable } from '@nestjs/common';
import {
  IProductRepository,
  ProductRepositoryToken,
} from '../interfaces/product.repository.interface';
import { Product } from '../entities/product.entity';
import { Builder } from 'builder-pattern';
import { v7 as uuidV7 } from 'uuid';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ProductRepositoryToken)
    private readonly productRepository: IProductRepository,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const productExists =
      await this.productRepository.findProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialId(
        product.productCollectionId,
        product.productColorPaletteId,
        product.productMaterialId,
      );
    if (productExists) {
      throw new ConflictException('Product already exists');
    }
    const uploadResult = await this.cloudinaryService.uploadImage(
      product.imageUrl,
    );
    const productBuilder = Builder(Product)
      .id(uuidV7())
      .name(product.name)
      .basePrice(product.basePrice)
      .imageUrl(uploadResult.secure_url)
      .productCollectionId(product.productCollectionId)
      .productColorPaletteId(product.productColorPaletteId)
      .productMaterialId(product.productMaterialId)
      .build();
    return await this.productRepository.createProduct(productBuilder);
  }

  async findProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialId(
    productCollectionId: string,
    productColorPaletteId: string,
    productMaterialId: string,
  ): Promise<Product> {
    return await this.productRepository.findProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialId(
      productCollectionId,
      productColorPaletteId,
      productMaterialId,
    );
  }
}
