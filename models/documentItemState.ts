import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DocumentItemState = prisma.documentItemsStates;

export default DocumentItemState;
