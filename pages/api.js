import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function News() {
  const [grid, setGrid] = useState(true);
  const router = useRouter();
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch("https://mongol-api-rest.vercel.app/clothes"),
          fetch("https://mongol-api-rest.vercel.app/Instruments"),
          fetch("https://mongol-api-rest.vercel.app/HistoricalTools"),
          fetch("https://mongol-api-rest.vercel.app/EthnicGroups"),
          fetch("https://mongol-api-rest.vercel.app/Provinces"),
          fetch("https://mongol-api-rest.vercel.app/HistoricalFigures"),
        ]);

        const results = await Promise.all(responses.map((res) => res.json()));

        const fullData = {
          clothes: results[0]?.clothes || [],
          instruments: results[1]?.instruments || [],
          tools: results[2]?.historicalTools || [],
          groups: results[3]?.ethnicGroups || [],
          provinces: results[4]?.provinces || [],
          historicalFigures: results[5]?.historicalFigures || [],
        };

        setData(fullData);
        setFilteredData(fullData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

    if (!data) return;

    const filterCategory = (category) =>
      data[category]?.filter((item) => item.name?.toLowerCase().includes(query)) || [];

    const newFilteredData = {
      clothes: filterCategory("clothes"),
      instruments: filterCategory("instruments"),
      tools: filterCategory("tools"),
      groups: filterCategory("groups"),
      provinces: filterCategory("provinces"),
      historicalFigures: filterCategory("historicalFigures"),
    };

    setFilteredData(newFilteredData);
  };

  if (!filteredData)
    return (
      <div className="h-screen flex justify-center items-center text-4xl">
        Loading...
      </div>
    );

  const isNoResults = Object.values(filteredData).every((categoryItems) => categoryItems.length === 0);

  return (
    <div className="p-5">
      
      <div className="flex justify-center mt-5 relative">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearch}
          className="w-10/12 rounded-xl shadow-xl p-3 border border-gray-300"
        />
        <button
          onClick={() => setGrid(!grid)}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
        >
          {grid ? "List" : "Grid"}
        </button>
      </div>

      {isNoResults ? (
        <div className="flex justify-center mt-6 text-xl font-bold">Oлдсонгүй...</div>
      ) : (
        Object.entries(filteredData).map(([category, items]) =>
          items.length > 0 ? (
            <div key={category}>
              <div className="text-center mt-6 text-3xl font-bold">{category}</div>

              <div className={`${grid ? "grid grid-cols-4 gap-4" : "flex flex-col space-y-4"} m-5`}>
                {items.map((item) => (
                  <div key={item.id} className={`border rounded-xl p-3 shadow-md ${grid ? "" : "flex items-center space-x-10"}`}>
                    {item.images?.length > 0 && (
                      <img
                        className={`${grid ? "w-full h-40" : "w-20 h-20"} object-contain rounded-md`}
                        src={item.images[0]}
                        alt={item.name}
                      />
                    )}
                    <div>
                      <h1 className="font-bold text-xl mb-3">{item.name}</h1>
                      {Object.entries(item).map(([key, value]) =>
                        key !== "id" && key !== "images" && key !== "name" ? (
                          <div key={key} className="mb-2">
                            <p className="font-bold">{key}:</p>
                            <p>{value}</p>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )
      )}
    </div>
  );
}
