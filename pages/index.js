import Router, { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-screen bg-black pl-60 pt-4">
        <p onClick={() => router.push("tsgagaar")} className=" w-96 h-48 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center text-white">
          Task1
        </p>
        <p onClick={() => router.push("ungusolih")} className=" w-96 h-48 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center text-white">
          Task2
        </p>
        <p onClick={() => router.push("task1")} className=" w-96 h-48 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center text-white">
          Task3
        </p>
        <p onClick={() => router.push("task2")} className=" w-96 h-48 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center text-white">
          Task4
        </p>
        <p onClick={() => router.push("task3")} className=" w-96 h-48 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center text-white">
          Task5
        </p>
        <p onClick={() => router.push("task4")} className=" w-96 h-48 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center text-white">
          Task6
        </p>
    </div>
  );
}
