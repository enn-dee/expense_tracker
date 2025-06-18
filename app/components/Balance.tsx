import { numberCommas } from "@/lib/utils";
import getUserBalance from "../actions/getUserBalance"

async function Balance() {
    const { balance } = await getUserBalance();

    return (
        <div className="w-72 mx-auto my-2 border border-black/20 shadow-xl p-2 rounded-lg text-center ">
            <h4>Your Balance</h4>
            <h1 className="text-xl font-semibold">${numberCommas(Number(balance?.toFixed(2)) ?? 0)}</h1>
        </div>
    )
}

export default Balance