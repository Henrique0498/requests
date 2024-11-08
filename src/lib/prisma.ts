import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as typeof global & { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

globalForPrisma.prisma = prisma;
