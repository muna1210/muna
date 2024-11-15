import React, {useState} from "react"; 

export default function Home() {
  const [color, setColor] = useState(" ");
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p> unngu solih</p>
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

  

