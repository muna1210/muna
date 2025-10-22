import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-[#f5ede4] font-sans flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center px-4">Бид таны тэжээвэр амьтдыг халамжлах болно.</h1>

      <img src="https://png.pngtree.com/png-vector/20220828/ourmid/pngtree-pets-cat-and-dog-vector-png-image_6127516.png"  width={500} height={400} />

      <div className="flex flex-col space-y-4 mt-6">
        <button 
          onClick={() => router.push("/burtguuleh")} 
          className="w-[300px] bg-[#c4a693] text-white text-xl py-3 rounded-xl"
        >
          Бүртгүүлэх
        </button>
        <button 
          onClick={() => router.push("/login")} 
          className="w-[300px] bg-[#c4a693] text-white text-xl py-3 rounded-xl"
        >
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
