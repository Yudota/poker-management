import { PrismaClient } from '@prisma/client'

export default class ConnectionFactory {
    static criar() {
        return new PrismaClient()
    }
}