import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GranelTag = prisma.granelTags;

export default GranelTag;
