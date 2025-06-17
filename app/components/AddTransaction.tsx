'use client'
import { useRef } from "react"
import { toast } from "react-toastify"
import addTransaction from "../actions/addTransaction"

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const clientAction = async (formData: FormData) => {
        const { data, error } = await addTransaction(formData)
        if (error) {
            toast.error(error)
        }
        else {
            toast.success("Transaction added")
            formRef.current?.reset();
        }
    }
    return (
        <div className="grid place-items-center gap-2 my-8">
            <h2 className="underline underline-offset-4 text-xl">Add Transaction</h2>
            <form action={clientAction} className=" w-80 mx-auto p-2 rounded-md shadow-md border border-black/20 flex flex-col gap-2 backdrop-blur-md bg-gradient-to-br from-blue-300/30 to-red-200/30" ref={formRef}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="text">Text</label>
                    <input type="text" name="text" id="text" placeholder="Enter text..." className="outline-none p-1.5  border border-black/30 rounded-md focus:border-black/50" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="amount">Amount <br />(negative - expense , positive - income)</label>
                    <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01" className="outline-none p-1.5  border border-black/30 rounded-md focus:border-black/50" />
                </div>
                <button className="bg-blue-800/60 w-full py-1.5 text-white font-sans rounded-md my-4 mx-auto">Add Transaction </button>
            </form>
        </div>
    )
}


export default AddTransaction