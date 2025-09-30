import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Get() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responses = await fetch("https://api.restful-api.dev/objects");
    const results = await responses.json();
    setData(results)
  };

  return (
    <div className="w-screen h-scroll bg-slate-300 flex flex-col items-center justify-center min-h-screen">{data.map}</div>
  );
}
