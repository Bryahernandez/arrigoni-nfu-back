import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DocumentItemType = prisma.documentItemsTypes;

export default DocumentItemType;
