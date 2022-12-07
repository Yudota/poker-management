import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default class ConnectionFactory {
    static criar() {
        return prisma
    }
}