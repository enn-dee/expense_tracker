'use client'
import { Transaction } from "@/types/Transaction";
import { numberCommas } from "@/lib/utils";
import { toast } from "react-toastify";
import deleteTransaction from "../actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    const handleDeleteTransaction = async (transactionId: string) => {
        const confirm = window.confirm("Are you sure you want to delte this transaction")

        if (!confirm) return;

        const { message, error } = await deleteTransaction(transactionId)

        if (error) toast.error(error)

        toast.success(message)

    }
    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={`group ${transaction.amount < 0 ? " border-r-red-400" : "border-r-green-400"} flex flex-row justify-between items-center p-2 w-full h-10 bg-gray-200/80  border-r-4 relative`}>
            {transaction.text}

            <span className="font-sans">{sign}${numberCommas(Math.abs(transaction.amount))}</span>

            <button onClick={() => handleDeleteTransaction(transaction.id)} className="bg-red-600/50 px-1.5  text-white font-bold hidden py-1 group-hover:block absolute -left-5">X</button>
        </li>
    )
}

export default TransactionItem