import Image from "next/image";


export default function Task1() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-violet-50 relative border border-4 rounded-xl border-red-100 w-96 h-96">
        <p className="  flex justify-center font-bold text-xl"> Muna </p>
        <p className="  text-xl flex justify-center"> 16! </p>
        <p className=" hover:text-rose-900 text-lg flex absolute inset-y-20 left-10"> NIT </p>
        <p className=" hover:text-rose-900 text-lg flex absolute inset-y-25 left-5"> 11B </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  bottom-20 left-2 "> Architecture </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  bottom-10 left-8 "> Design </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  top-1/2 left-16"> ITW </p>
        <p className=" hover:text-rose-900 text-lg flex absolute  inset-y-40 left-5"> Draw </p>
        <div className="flex justify-center items-center">
        <Image src="/zurg112.jpg" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}