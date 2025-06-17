import { checkUser } from "@/lib/checkUser"
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs"

async function Header() {
    const user = await checkUser();

    return (
        <nav className="w-screen h-12 bg-black/90 text-white/80 flex flex-row justify-between items-center p-2 ">
            <h2 className="text-xl font-bold">Expense Tracker</h2>
            <div >

                <SignedOut>
                    <div className="bg-purple-800 px-2 py-1 rounded-md text-gray-300 font-mono hover:cursor-pointer hover:bg-purple-800/90">
                        <SignInButton />
                    </div>
                </SignedOut>
            </div>

            <SignedIn>
                <div className="bg-transparen">
                    <UserButton />
                </div>
            </SignedIn>

        </nav >
    )
}

export default Header