'use server'

import { db } from "@/lib/db"
import { Transaction } from "@/types/Transaction"
import { auth } from "@clerk/nextjs/server"

async function getTransactions(): Promise<{
    transactions?: Transaction[];
    error?: string;
}> {

    const userId = (await auth()).userId
    if (!userId) return { error: "User not found" }
    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return { transactions }

    } catch (error) {
        return { error: "Database error" }
    }
}

export default getTransactions