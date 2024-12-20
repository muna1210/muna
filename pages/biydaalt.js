import { useRouter } from "next/router";
import { useState } from "react";

const data = [
  { id: 1, Name: "AriunBayar", Lastname: "OdBayr" },
  { id: 2, Name: "Badraa", Lastname: "Tsogbaatar" },
  { id: 3, Name: "Bilguuntugs", Lastname: "Amarbat" },
  { id: 4, Name: "Gan-Erdene", Lastname: "Undrakhtamir" },
  { id: 5, Name: "Gunbilig", Lastname: "Bat-enh" },
  { id: 6, Name: "Delgermurun", Lastname: "Ganbold" },
  { id: 7, Name: "Jargal", Lastname: "Bayndalai" },
  { id: 8, Name: "Munkhbaysgalan", Lastname: "Chinbat" },
  { id: 9, Name: "Munkhnaran", Lastname: "Ulziibayr" },
  { id: 10, Name: "Nomindari", Lastname: "Enkhtur" },
  { id: 11, Name: "Siilen", Lastname:"Batsaikhan"},
  { id: 12, Name: "Tuvshin", Lastname: "Bulgan" },
  { id: 13, Name: "Temugei", Lastname: "Teluun" },
  { id: 14, Name: "Temuulen", Lastname: "Temuujin" },
  { id: 15, Name: "Undrakh", Lastname: "Sukhbaatar" },
  { id: 16, Name: "Khangarid", Lastname: "Jargalsaikhan" },
  { id: 17, Name: "Chinbiligt", Lastname: "Dovchinbazar" },
  { id: 18, Name: "Erdenebold", Lastname: "Erdenetugs" },
  { id: 19, Name: "Erdenejargal", Lastname: "Batragchaa" },
];

export default function News() {
  const router = useRouter();
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((student) =>
      student.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="h-full bg-gradient-to-r from-pink-100 to-rose-400">
      <div className="h-auto w-full flex items-center justify-center">
        <div className="ml-12 w-full absolute">
        <div onClick={() => router.back()}className="w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center">Back</div>
        </div>
        <h1 className="text-white mt-5 font-bold text-xl mb-3">
          Сурагчдын жагсаалт
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by name..."
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
          {filteredStudents.length > 0 ? (
            <div
              className={
                grid ? "grid grid-cols-2 gap-4" : "space-y-4"
              }
            >
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="shadow-2xl bg-gradient-to-r from-pink-400 to-rose-100 hover:from-violet-300 hover:to-purple-5100 rounded-xl p-4 flex flex-col text-black"
                >
                  <h1 className="font-bold text-2xl mb-3">
                    {student.Name}
                  </h1>
                  <h1>Сурагчын овог: {student.Lastname}</h1>
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