import { useState, useEffect } from "react";
import { useRouter } from "next/router"; 

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [done, setDone] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    if (seconds < 10) {
      const timer = setTimeout(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [seconds]);

  return (
    <div className="flex items-center justify-center h-screen flex-col relative">

      <div 
        onClick={() => router.back()} 
        className="cursor-pointer w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center absolute left-4 top-4"
      >
        Back
      </div>

     
      <div className="p-6 border rounded-lg shadow-lg text-center text-lg flex">
        <p>Тоолуур:</p>
        {done ? <p>10</p> : <p> {seconds}</p>}
      </div>
    </div>
  );
}