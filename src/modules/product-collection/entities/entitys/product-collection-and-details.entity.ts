import { IProductCollectionAndDetails } from '../../interfaces/entitys/product-collection-detail.interface';
import { ProductSize } from 'src/modules/product-size/entities/product-size.entity';
import { ProductMaterial } from 'src/modules/product-material/entities/product-material.entity';
import { ProductColorPalette } from 'src/modules/product-color-palette/entities/product-color-palette.entity';

export class ProductCollectionAndDetails
  implements IProductCollectionAndDetails
{
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string,
    public productTypeId: string,
    public ProductMaterial: ProductMaterial[],
    public ProductColorPalette: ProductColorPalette[],
    public ProductSize: ProductSize[],
  ) {}
}
