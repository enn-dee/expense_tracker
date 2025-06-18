import { numberCommas } from "@/lib/utils"
import getIncomeExpense from "../actions/getIncomeExpense"

async function IncomeExpense() {
    const { income, expense } = await getIncomeExpense()
    return (
        <div className="w-72 h-20 my-2  mx-auto shadow-lg border border-black/50 rounded-lg flex flex-row gap-2 justify-around items-center">
            <div>
                <h4 className="text-xl ">Income</h4>
                <p className="text-green-500/80 font-mono text-center">${numberCommas(Number(income?.toFixed(2)))}</p>
            </div>
            <div className="h-full bg-black/20 w-[1px]"></div>
            <div>
                <h4 className="text-xl">Expense</h4>
                <p className="text-red-500/80 font-mono text-center">${numberCommas(Number(expense?.toFixed(2)))}</p>
            </div>
        </div>
    )
}

export default IncomeExpense