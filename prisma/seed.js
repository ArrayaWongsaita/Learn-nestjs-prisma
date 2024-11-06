/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require('@prisma/client');
const { v7 } = require('uuid');

const prisma = new PrismaClient();

async function main() {
  try {
    // Seed ProductType
    const productTypes = [
      {
        id: v7(),
        name: 'Ring',
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Necklace',
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Earrings',
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Bracelet',
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Watch',
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
    ];

    await prisma.productType.createMany({
      data: productTypes,
    });

    // Seed ProductCollection
    const productCollections = [
      {
        id: v7(),
        name: 'Classic Collection',
        productTypeId: productTypes[0].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Modern Collection',
        productTypeId: productTypes[0].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Vintage Collection',
        productTypeId: productTypes[0].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Luxury Collection',
        productTypeId: productTypes[0].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
    ];

    await prisma.productCollection.createMany({
      data: productCollections,
    });

    // Seed ProductColorPalette
    const colorPalettes = [
      {
        id: v7(),
        name: 'Gold',
        colorCode: 'FACF25',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        name: 'Silver',
        colorCode: 'D9D9D9',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        name: 'Mars Scarlet',
        colorCode: 'FF0000',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        name: 'Light Amethyst',
        colorCode: 'D38CF6',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        name: 'White',
        colorCode: 'FFFFFF',
        productCollectionId: productCollections[0].id,
      },
    ];

    await prisma.productColorPalette.createMany({
      data: colorPalettes,
    });

    // Seed ProductMaterial
    const materials = [
      {
        id: v7(),
        material: 'Gold',
        colorCode: 'FACF25',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        material: 'Silver',
        colorCode: 'D9D9D9',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        material: 'Mars Scarlet',
        colorCode: 'FF0000',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        material: 'Light Amethyst',
        colorCode: 'D38CF6',
        productCollectionId: productCollections[0].id,
      },
      {
        id: v7(),
        material: 'White',
        colorCode: 'FFFFFF',
        productCollectionId: productCollections[0].id,
      },
    ];
    await prisma.productMaterial.createMany({
      data: materials,
    });

    const product = [
      {
        id: v7(),
        name: 'Ring 1',
        basePrice: 4000,
        productCollectionId: productCollections[0].id,
        productMaterialId: materials[0].id,
        productColorPaletteId: colorPalettes[0].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Ring 2',
        basePrice: 4001,
        productCollectionId: productCollections[0].id,
        productMaterialId: materials[1].id,
        productColorPaletteId: colorPalettes[1].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Ring 3',
        basePrice: 4002,
        productCollectionId: productCollections[0].id,
        productMaterialId: materials[2].id,
        productColorPaletteId: colorPalettes[2].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Ring 4',
        basePrice: 4003,
        productCollectionId: productCollections[0].id,
        productMaterialId: materials[3].id,
        productColorPaletteId: colorPalettes[3].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
      {
        id: v7(),
        name: 'Ring 5',
        basePrice: 4004,
        productCollectionId: productCollections[0].id,
        productMaterialId: materials[4].id,
        productColorPaletteId: colorPalettes[4].id,
        imageUrl:
          'https://res.cloudinary.com/dbipwiblz/image/upload/v1730799291/Unibijoux/zc7krmcccsuf2otcb1xc.png',
      },
    ];
    await prisma.product.createMany({
      data: product,
    });
    console.log('Seeding completed');
  } catch (error) {
    console.log(error);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
