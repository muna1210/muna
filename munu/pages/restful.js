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
  <div className="min-h-screen bg-gray-100 p-6 font-sans">      
    <header className="mb-10 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900">API Data </h1>
      <p className="text-lg text-gray-500 mt-2">
        A simple list of fetched objects.
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-black mb-3 ">
              {item.name || "No Name"}
            </h2>

            <div className="border-t pt-3 mt-3 border-gray-200">
          
            </div>
          </div>
        ))
      ) : (
        <div className="md:col-span-full text-center text-gray-500 p-10 bg-white rounded-2xl shadow-inner">
          <p className="text-xl">Not  found</p>
        </div>
      )}
    </div>
  </div>
);

}
