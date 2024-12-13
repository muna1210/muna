import { useState } from "react"; 
import Router, { useRouter } from "next/router";
const usersData = [
    {id: 1, name: "Blitz", email:"Blitzy@gmail.com"},
    {id: 2, name: "Senzu", email:"Senzu@gmail.com"},
    {id: 3, name: "Mzinho", email:"Mzinho@gmail.com"},
    {id: 4, name: "910", email:"910@gmail.com"},
    {id: 5, name: "Techno4K", email:"Techno4K@gmail.com"},
    {id: 6, name: "Maaraa", email:"Maaraa"},
];

export default function Uesers (){
    const router = useRouter();
    const [search, setSearch] = useState("");
    const filteredUsers = usersData.filter((users) =>
    users.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log("search", search);
    console.log("filtered", filteredUsers);

    return(
        <div className="h-screen w-full bg-gray-100 p-8  ">
            <div onClick={() => router.back()}className="w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center">Back</div>
            <h1 className=" text-2xl front-bold mb-4 text-center">Хэрэглэгчийн жагсаалт</h1>
            <div className="mb-6">
            <input type="text"/>
            <p className="text-gray-400 mb-6"> Хэрэглэгчийн нэрээр хайна уу.. {search}</p>

            </div>
        </div>
    );
}