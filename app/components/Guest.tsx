import { SignInButton } from "@clerk/nextjs"

const Guest = () => {
    return (
        <div className="text-center flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p>Please sign in to manage your transactions</p>
            <div className="bg-purple-700 px-2 py-1 w-fit mx-auto rounded-md text-white/90 hover:cursor-pointer">
                <SignInButton />
            </div>
        </div>
    )
}

export default Guest