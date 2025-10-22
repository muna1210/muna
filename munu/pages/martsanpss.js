import { useRouter } from "next/navigation";
import Image from "next/image";

export default function  ForgettPage() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-[#f5ede4] flex flex-col items-center justify-center relative">


      <button onClick={() => router.back()} className="absolute top-5 left-5 text-3xl">←</button>


      <h1 className="text-3xl font-bold text-center w-[300px] mb-6">
        Та нууц үгээ мартсан уу?
      </h1>

    
      <input
        type="text"
        placeholder="Имэйл эсвэл Утасны дугаар"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none"
      />

<a href="" className="text-base underline text-black mb-4"
      > Баталгаажуулах код авах</a>
      
      <input
        type="text"
        placeholder="Код хийх"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none"
      />
      <button className="w-[300px] bg-[#c4a693] text-black text-xl py-3 rounded-xl mb-4"
      onClick={() => router.push("/lastpage")}>
          Дараагийх
      </button>
    </div>
  );
}
