import { PrismaClient } from "../prisma/generated/client";


if (process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient()
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}

export default prisma