import { useState } from "react";
import Router, { useRouter } from "next/router";
export default function Task3() {
  const router = useRouter();
  const [grid, setGrid] = useState(false);
  const data = [
    {
      id: 1,
      title: "Test1",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      title: "Test2",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 3,
      title: "Test3",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 4,
      title: "Test4",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col align items-center bg-white">
<div onClick={() => router.back()}className="w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center">Back</div>
        <div className="w-2/3 h-full p-8 drop-shadow-2xl">
            <div className="w-full h-16 flex items-center justify-between ">
                <h1 className="text-3xl text-black font-bold">Нийтлэлүүд</h1>

                <button onClick={() => setGrid(!grid)} className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800">{grid ? "List руу шилжих" : "Grid руу шилжих"}</button>
            </div>
            
            <div className={grid == true ? "grid grid-cols-2 gap-4" : "space-y-4"}>
                {data.map((data) => (
                    <div key={data.id} className="border-2 border-black rounded-xl p-4 flex flex-col justify-evenly text-black text-xl">
                        <h1 className="font-bold text-2xl mb-3">{data.title}</h1>
                        <h1>{data.Text}</h1>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}
