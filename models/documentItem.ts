import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DocumentItem = prisma.documentItems;

export default DocumentItem;
