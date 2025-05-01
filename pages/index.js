import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaThLarge, FaList } from 'react-icons/fa';

const tasks = [
  { name: "Tsag Agaar", path: "tsgagaar", img: "/tsag-agaar.png" },
  { name: "Ungu solih", path: "ungusolih", img: "/ungu solih.png" },
  { name: "Cv", path: "CV", img: "/CV.png" },
  { name: "Search", path: "Search", img: "/search.png" },
  { name: "Grid List", path: "list", img: "/list.png" },
  { name: "MongolZ", path: "MongolZ", img: "/mongolz.png" },
  { name: "Tooluur", path: "tooluur", img: "/tooluur.png" },
  { name: "Mongol api", path: "11b", img: "/mongol.png" },
  { name: "Biydaalt 1r uliral", path: "biydaalt", img: "/biydaalt1r.png" },
  { name: "Toki", path: "toki", img: "/toki.png" },
];

export default function TaskList() {
  const router = useRouter();
  const [view, setView] = useState('grid');

  return (
    <div className="w-full h-full bg-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl text-gray-700 font-extrabold mb-6">11B - U. Munkhnaran</h1>
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setView('grid')} 
          className={`p-3 rounded-full text-white transition-all ${view === 'grid' ? 'bg-pink-600' : 'bg-gray-400'}`}
        >
          <FaThLarge size={24} />
        </button>
        <button 
          onClick={() => setView('list')} 
          className={`p-3 rounded-full text-white transition-all ${view === 'list' ? 'bg-pink-600' : 'bg-gray-400'}`}
        >
          <FaList size={24} />
        </button>
      </div>
      <ul className={`w-full max-w-5xl ${view === 'grid' ? 'grid grid-cols-3 gap-6' : 'block'}`}>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => router.push(task.path)}
            className={`cursor-pointer mt-4 p-4 border-2 border-pink-300 bg-white transition hover:duration-200 rounded-xl text-xl flex ${view === 'grid' ? 'flex-col' : 'flex-row'} items-center justify-start text-gray-800 font-semibold shadow-lg hover:shadow-2xl transition-all`}
          >
            <img src={task.img} alt={task.name} className={`object-cover rounded-lg ${view === 'grid' ? 'w-40 h-32 mb-3' : 'w-16 h-16 mr-4'}`} />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}






