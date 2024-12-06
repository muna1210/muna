import { useState } from "react"; 
const usersData = [
    {id: 1, name: "Blitz", email:"Blitzy@gmail.com"},
    {id: 2, name: "Senzu", email:"Senzu@gmail.com"},
    {id: 3, name: "Mzinho", email:"Mzinho@gmail.com"},
    {id: 4, name: "910", email:"910@gmail.com"},
    {id: 5, name: "Techno4K", email:"Techno4K@gmail.com"},
    {id: 6, name: "Maaraa", email:"Maaraa"},
];
export default function Uesers (){
    const [search, setSearch] = useState("");
    const filteredUsers = usersData.filter((users) =>
    users.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log("search", search);
    console.log("filtered", filteredUsers);

    return(
        <div className="h-screen w-full bg-gray-100 p-8">
            <h1 className=" text-2xl front-bold mb-4 text-center">Хэрэглэгчийн жагсаалт</h1>
            <div className="mb-6">
                
            </div>
        </div>
    );
}