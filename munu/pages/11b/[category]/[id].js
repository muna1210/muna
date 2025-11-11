import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ItemDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

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

        let foundItem = null;
        Object.values(fullData).forEach((category) => {
          if (!foundItem) {
            foundItem = category.find((item) => item.id === id);
          }
        });

        foundItem ? setItem(foundItem) : setError("Item not found!");
      } catch {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div className="flex items-center justify-center min-h-screen text-sky-700">Loading...</div>;

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <p className="text-gray-600">{error}</p>
        <button
          className="mt-4 px-4 py-2 text-sky-700 border border-sky-300 rounded transition duration-200 ease-in-out hover:bg-sky-100"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6 transition-opacity duration-300 ease-in-out">
      <div className="max-w-lg w-full bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 ease-in-out hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-sky-800 transition-colors duration-200">{item.name}</h2>
        <p className="text-slate-600 mt-2 transition-opacity duration-200">{item.description}</p>

        {item?.images?.length > 0 && (
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-full h-56 object-cover rounded-xl mt-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          />
        )}

        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
            onClick={() => setIsModalOpen(false)}
          >
            <img
              src={item.images[0]}
              alt={item.name}
              className="max-w-md rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        )}

        <div className="mt-6 space-y-4">
          {Object.entries(item).map(
            ([key, value]) =>
              key !== "id" &&
              key !== "images" &&
              key !== "name" &&
              key !== "description" && (
                <div
                  key={key}
                  className="p-4 bg-slate-100 rounded-md hover:scale-[1.01] transition-transform duration-200"
                >
                  <p className="font-semibold text-sky-700 capitalize">{key}:</p>
                  <p className="text-slate-600">{value}</p>
                </div>
              )
          )}
        </div>

        <button
          className="mt-6 w-full py-2 border border-sky-300 rounded text-sky-800 transition duration-200 ease-in-out hover:bg-sky-100"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}