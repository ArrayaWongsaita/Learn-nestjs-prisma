import { Inject, Injectable } from '@nestjs/common';
import {
  ProductCollectionRepositoryInterface,
  ProductCollectionRepositoryToken,
} from '../interfaces/repositories/product-collection.repository.interface';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { ProductCollection } from '../entities/entitys/product-collection.entity';
import { Builder } from 'builder-pattern';
import { v7 as uuidv7 } from 'uuid';

@Injectable()
export class ProductCollectionService {
  constructor(
    @Inject(ProductCollectionRepositoryToken)
    private readonly productCollectionRepository: ProductCollectionRepositoryInterface,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async createProductCollection({
    name,
    imageUrl,
    productTypeId,
  }: Omit<ProductCollection, 'id'>): Promise<ProductCollection> {
    // Upload image to Cloudinary
    const uploadResult = await this.cloudinaryService.uploadImage(imageUrl);
    // Create ProductCollection
    const productCollection = Builder(ProductCollection)
      .id(uuidv7())
      .name(name)
      .imageUrl(uploadResult.secure_url)
      .productTypeId(productTypeId)
      .build();

    return this.productCollectionRepository.createProductCollection(
      productCollection,
    );
  }

  async getAllProductCollections(): Promise<ProductCollection[]> {
    const allProductCollection =
      await this.productCollectionRepository.getAllProductCollections();
    return allProductCollection.map((productCollection) =>
      Builder(ProductCollection)
        .id(productCollection.id)
        .name(productCollection.name)
        .imageUrl(productCollection.imageUrl)
        .productTypeId(productCollection.productTypeId)
        .build(),
    );
  }
}
