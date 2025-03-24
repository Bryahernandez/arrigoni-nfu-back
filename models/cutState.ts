import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CuState = prisma.cutsStates;

export default CuState;
