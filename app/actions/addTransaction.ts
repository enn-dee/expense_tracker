'use server'

interface TransactionData {
    text: string;
    amount: number;
}

interface TransactionResult {
    data?: TransactionData;
    error?: string
}

async function addTransaction(formdata: FormData): Promise<TransactionResult> {
    const textValue = formdata.get("text")
    const amountValue = formdata.get("amount")

    if (!textValue || textValue === "" || !amountValue) {
        return { error: 'Text or amount is missing' }
    }
    const text: string = textValue.toString();
    const amount: number = parseFloat(amountValue.toString())

    const transactionData: TransactionData = {
        text, amount
    }
    return { data: transactionData }
}

export default addTransaction;