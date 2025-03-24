import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Document = prisma.documents;

export default Document;
