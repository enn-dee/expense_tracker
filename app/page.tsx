import AddTransaction from "./components/AddTransaction";
import Guest from "./components/Guest";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <Guest />
  return (
    <>
      <h1 className="font-bold text-2xl text-center">Welcome, {user.firstName + " " + user.lastName}</h1>
      <AddTransaction/>
    </>
  );
}
