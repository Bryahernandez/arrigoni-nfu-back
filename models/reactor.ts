// src/models/User.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Reactor = prisma.reactors;

export default Reactor;
