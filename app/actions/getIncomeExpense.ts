'use server'

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

async function getIncomeExpense(): Promise<{
    income?: number;
    expense?: number;
    error?: string
}> {

    const userId = (await auth()).userId
    if (!userId) return { error: "User not found" }
    try {
        const transaction = await db.transaction.findMany({
            where: { userId }
        })

        const amounts = transaction.map((transaction) => {
            return transaction.amount
        })

        const income = amounts.filter((item) => item > 0).reduce((acc, item) => acc + item, 0)

        const expense = amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0)

        return { income: Math.abs(Number(income.toFixed(3))), expense: Math.abs(Number(expense.toFixed(3))) }

    } catch (error) {
        return { error: "Database error" }
    }
}

export default getIncomeExpense