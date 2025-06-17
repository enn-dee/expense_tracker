import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Guest from "./components/Guest";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <Guest />
  return (
    <>
      <h1 className="font-bold text-2xl text-center">Welcome, <span className="text-green-600/60">{user.firstName + " " + user.lastName}</span></h1>
      <Balance />
      <AddTransaction />
    </>
  );
}
