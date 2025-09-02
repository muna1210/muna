import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-[#ede2d7] flex flex-col items-center justify-center relative">

      
      <button onClick={() => router.back()} className="absolute top-5 left-5 text-3xl">←</button>

      
      <h1 className="text-2xl font-bold text-black text-center w-[300px] mb-6 leading-relaxed">
        Сайн уу? Бүртгүүлэхэд бэлэн үү?
      </h1>

      
      <input
        type="text"
        placeholder="Нэр*"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none"
      />

     
      <input
        type="email"
        placeholder="Email эсвэл Утасны дугаар*"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none"
      />

      
      <input
        type="password"
        placeholder="Нууц үг*"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none"
      />

      
      <input
        type="password"
        placeholder="Нууц үг давтах*"
        className="w-[300px] bg-[#e3d6ca] border-none rounded-lg px-4 py-3 text-lg mb-6 focus:outline-none"
      />

      
      <button className="w-[300px] bg-[#bfa696] text-white text-xl py-3 rounded-xl mb-6">
        Бүртгүүлэх
      </button>

      
      <div className="flex items-center w-[300px] mb-4">
        <hr className="flex-grow border-gray-400" />
        <span className="mx-2 text-gray-600 text-lg">Нэвтрэх боломжит</span>
        <hr className="flex-grow border-gray-400" />
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

      
      <p className="text-lg text-black">
        Хэрэглэгчийн хаяг байгаа юу?{" "}
        <button
          onClick={() => router.push("/login")}
          className="text-red-600 underline"
        >
          Нэвтрэх
        </button>
      </p>
    </div>
  );
}

