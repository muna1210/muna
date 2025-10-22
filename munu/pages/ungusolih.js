import React, { useEffect ,useState} from "react"; 
import Router, { useRouter } from "next/router";
export default function Home() {
  const [color, setColor] = useState(" ");
  const router = useRouter();

  useEffect (() => {
    setColor ("red");
    console.log("oroh");

  },[])
  return (
    
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
        <div onClick={() => router.back()}className="w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center">Back</div>
      <button
      className="border bg-red-800 py-4 px-6"
      onClick={() => {
        setColor("red");
      }}
      >ulaan</button>
      <button
      className="border bg-blue-800 py-4 px-6"
      onClick={()=> {
        setColor("blue");
      }}
      >tsenher</button>
      <button className="border bg-green-800 py-4 px-6"
      onClick={() =>{
        setColor("green");
      }}
      >nogoon</button>
    </div>
    
  );
};

  

