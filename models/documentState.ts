import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DocumentState = prisma.documentStates;

export default DocumentState;
