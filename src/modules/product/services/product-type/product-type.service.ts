import { Inject, Injectable } from '@nestjs/common';
import {
  IProductTypeRepository,
  ProductTypeRepositoryToken,
} from '../../interfaces/repositories/product-type/product-type.repository.interface';
import { ProductType } from '../../entities/entitys/product-type/product-type.entity';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { v7 as uuidv7 } from 'uuid';
import { Builder } from 'builder-pattern';
import { ProductTypeBuilder } from '../../entities/builders/product-type/product-type.builder';

@Injectable()
export class ProductTypeService {
  constructor(
    @Inject(ProductTypeRepositoryToken)
    private readonly productTypeRepository: IProductTypeRepository,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async createProductType({
    name,
    imageUrl,
  }: {
    name: string;
    imageUrl: string;
  }): Promise<ProductType> {
    // Upload image to Cloudinary
    const uploadResult = await this.cloudinaryService.uploadImage(imageUrl);
    // Create ProductType
    const productType = Builder(ProductTypeBuilder)
      .id(uuidv7())
      .name(name)
      .imageUrl(uploadResult.secure_url) // Use the URL from Cloudinary
      .build();

    return this.productTypeRepository.create(productType);
  }

  async getAllProductTypes(): Promise<ProductType[]> {
    return this.productTypeRepository.findAll();
  }
}
