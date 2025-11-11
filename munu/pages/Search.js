import { useState } from "react"; 
import Router, { useRouter } from "next/router";
export default function Task2() {
    const router = useRouter();
    const [search, setSearch] = useState ("");

    console.log("search utga ->", search);

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <div onClick={() => router.back()}className="w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center">Back</div>
            <input
            type="search"
            onChange={(test) => setSearch (test.target.value)}s
            className="border-2 border-black rounded"
            />
            <p>search: {search}</p>
        </div>
    );
}