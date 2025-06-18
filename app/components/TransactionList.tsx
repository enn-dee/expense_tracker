import { Transaction } from "@/types/Transaction";
import getTransactions from "../actions/getTransactions"
import TransactionItem from "./TransactionItem";

async function TransactionList() {
    const { transactions, error } = await getTransactions();
    if (error) return (<p>{error}</p>)
    return (
        <div className=" w-80 mx-auto   p-2 rounded-md  shadow-indigo-600/70 shadow-lg">
            <h3 className="underline underline-offset-4 text-center my-2 text-green-700/80 text-xl">History</h3>
            <ul className="flex flex-col gap-2 font-mono px-2">
                {transactions && transactions.map((transaction: Transaction) => {
                    return <TransactionItem key={transaction.id} transaction={transaction} />
                })}
            </ul>
        </div>
    )
}

export default TransactionList