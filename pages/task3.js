import { useState } from "react";

export default function Task3() {
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
    <div className=" h-screen w-full mt-4">
      <div className="flex justify-between mx-60">
        <p className="text-2xl font-bold">
          Нийтлэлүүд
        </p>
        <button
          className="bg-blue-500 p-4 rounded-xl"
          onClick={() => {
            setGrid(!grid);
          }}
        >
          {grid == true ? "Grid рүү шилжих" : "List рүү шилжих"}
        </button>
      </div>
      <div>
        
      </div>
      
    </div>
  );
}
