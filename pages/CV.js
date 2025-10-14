import Image from "next/image";
import Router, { useRouter } from "next/router";

export default function Task1(){
const router = useRouter(); 
  return (
    <div className="flex justify-center items-center h-screen">
      <div onClick={() => router.back()}className="w-24 h-10 border-2 border-white bg-slate-300 hover:bg-slate-500 rounded-md text-2xl flex items-center justify-center">Back</div>
      <div className="bg-violet-50 relative  border-4 rounded-xl border-red-100 w-96 h-96">
        <p className="  flex justify-center font-bold text-xl"> Muna </p>
        <p className="  text-xl flex justify-center"> 16! </p>
        <p className=" hover:text-rose-900 text-lg flex absolute inset-y-20 left-10"> NIT </p>
        <p className=" hover:text-rose-900 text-lg flex absolute inset-y-25 left-5"> 11B </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  bottom-20 left-2 "> Architecture </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  bottom-10 left-8 "> Design </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  top-1/2 left-16"> ITW </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  inset-y-40 left-5"> Draw </p>

        <p className=" hover:text-rose-900 text-lg flex absolute  inset-y-20 right-10 "> Lego </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  top-y-25 right-5 "> Paint </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  bottom-20 right-2 "> Crocheting </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  bottom-5 right-6 "> Collect books </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  top-1/2 right-10 "> Sweets </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  inset-y-40 right-5 "> Music </p>
        <div className="flex justify-center items-center">
        <Image src="/zurg112.jpg" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}