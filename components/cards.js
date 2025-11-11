import Link from "next/link";

export default function Cards(props) {
  return (
    <Link href={`/product/${props.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition p-4 cursor-pointer text-center">
        {/* --- Image --- */}
        <img
          src={props.Image}
          alt={props.Name}
          className="w-full h-56 object-contain mb-3"
        />

        {/* --- Product Info --- */}
        <h1 className="text-lg font-semibold text-gray-800">{props.Name}</h1>
        <p className="text-blue-600 font-medium">${props.Price} USD</p>
      </div>
    </Link>
  );
}
