import { useRouter } from "next/router";
import { useState } from "react";

const data = [
    {id: 1, name: "Blitz", email:"Blitzy@gmail.com"},
    {id: 2, name: "Senzu", email:"Senzu@gmail.com"},
    {id: 3, name: "Mzinho", email:"Mzinho@gmail.com"},
    {id: 4, name: "910", email:"910@gmail.com"},
    {id: 5, name: "Techno4K", email:"Techno4K@gmail.com"},
    {id: 6, name: "Maaraa", email:"Maaraa@gmail.com"},
];

export default function News() {
  const router = useRouter();
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((players) =>
      players.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  return (
    <div className="h-full bg-gradient-to-r from-pink-100 to-rose-400">
      <div className="h-auto w-full flex items-center justify-center">
        <div className="ml-12 w-full absolute">
        <div onClick={() => router.back()}className="w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center">Back</div>
        </div>
        <h1 className="text-white mt-5 font-bold text-xl mb-3">
          жагсаалт
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Хэрэглэгчийн нэрийг хайх"
          value={search}
          onChange={handleSearch}
          className="w-10/12 outline-none rounded-xl shadow-xl p-3"
        />
        <button
          onClick={() => setGrid(!grid)}
          className=" text-white p-2 rounded-md hover:bg-pink-800"
        >
          {grid ? "List-руу шилжих" : "Grid руу шилжих"}
        </button>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="w-11/12">
          {filteredPlayers.length > 0 ? (
            <div
              className={
                grid ? "grid grid-cols-2 gap-4" : "space-y-4"
              }
            >
              {filteredPlayers.map((players) => (
                <div
                  key={players.id}
                  className="shadow-2xl bg-gradient-to-r from-pink-400 to-rose-100 hover:from-violet-300 hover:to-purple-5100 rounded-xl p-4 flex flex-col text-black"
                >
                  <h1 className="font-bold text-2xl mb-3">
                    {players.name}
                  </h1>
                   {players.email}
                </div>
              ))}
            </div>
          ) : (
            <p>Сурагч олдсонгүй.</p>
          )}
        </div>
        <div className="w-screen h-screen bg-gradient-to-r from-pink-100 to-rose-400 absolute -z-10"></div>
      </div>
    </div>
  );
}