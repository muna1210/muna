import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-[#f5ede4] flex flex-col items-center justify-center relative">


      <button onClick={() => router.back()} className="absolute top-5 left-5 text-3xl">←</button>


      <h1 className="text-3xl font-bold text-center w-[300px] mb-6">
        Тавтай морил! Дахин уулзаж байгаад баяртай байна.
      </h1>

    
      <input
        type="text"
        placeholder="Нэвтрэх нэр эсвэл имэйл"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none"
      />

      
      <input
        type="password"
        placeholder="Нууц үг"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none"
      />

      
      <a href="" className="text-base underline text-black mb-4"
      onClick={() => router.push("/martsanpss")} 
      >Нууц үг мартсан?</a>

      
      <button className="w-[300px] bg-[#c4a693] text-black text-xl py-3 rounded-xl mb-4">
        Нэвтрэх
      </button>

      <div className="flex items-center w-[300px] mb-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500 text-lg">Нэвтрэх боломжит</span>
        <hr className="flex-grow border-gray-300" />
      </div>


      <div className="flex justify-around w-[300px] mb-6">
        <button className="border w-12 h-12 flex items-center justify-center rounded">
            <img src="https://endlessicons.com/wp-content/uploads/2012/10/facebook-icon.png"/>
        </button>
        <button className="border w-12 h-12 flex items-center justify-center rounded">
        <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/09-google-3-512.png"/>
        </button>
        <button className="border w-12 h-12 flex items-center justify-center rounded">
        <img src="https://cdn-icons-png.flaticon.com/256/0/747.png"/>
        </button>
      </div>

      
      <p className="text-lg">
        Хэрэглэгчийн хаяг байхгүй юу?
        <button
          onClick={() => router.push("/burtguuleh")}
          className="text-red-600 underline ml-1"
        >
          Бүртгүүлэх
        </button>
      </p>
    </div>
  );
}
