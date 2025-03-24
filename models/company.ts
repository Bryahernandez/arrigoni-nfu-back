// src/models/User.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Company = prisma.companies;

export default Company;
