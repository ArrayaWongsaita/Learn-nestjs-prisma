import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;


const prismaTokenSymbol: unique symbol = Symbol('prisma');
export const PrismaToken = prismaTokenSymbol.toString();
