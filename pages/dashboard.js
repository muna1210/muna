import Cards from "@/components/cards";
import { useRouter } from "next/router";
import { useState } from "react";

const data = [
  {
    id: 1,
    Name: "Sneakers",
    Image: "/adidas.png",
    Color: "White",
    Accessories: "Extra laces",
    Price: "120,000₮",
    Stock: 10,
  },
  {
    id: 2,
    Name: "Pants",
    Image: "/blackpants.png",
    Color: "Black",
    Accessories: "Belt",
    Price: "85,000₮",
    Stock: 5,
  },
  {
    id: 3,
    Name: "T-shirt",
    Image: "/top.png",
    Color: "Blue",
    Accessories: "Sticker",
    Price: "35,000₮",
    Stock: 20,
  },
  {
    id: 4,
    Name: "Hoodie",
    Image: "/hoodie.png",
    Color: "Gray",
    Accessories: "Keychain",
    Price: "65,000₮",
    Stock: 12,
  },
  {
    id: 5,
    Name: "Skirt",
    Image: "/skirt.png",
    Color: "Pink",
    Accessories: "Chain",
    Price: "55,000₮",
    Stock: 7,
  },
];

export default function News() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((product) =>
      product.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/5 h-full bg-red-100 p-4">
        <img
          src="https://nhs.edu.mn/favicon.ico"
          className="w-32 h-32 mx-auto"
        />
        <p className="flex justify-center mt-4 font-semibold text-xl text-rose-400">
          Nest Education IT School
        </p>
        <p className="flex justify-center mt-2 text-lg font-medium">
          Munkhnaran Ulziibayr
        </p>
        <p className="flex justify-center mt-2 text-lg">11Б</p>
      </div>

      <div className="w-4/5 h-full bg-rose-50 flex flex-col p-6 gap-4">

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="bg-rose-300 px-4 py-2 rounded text-white font-medium">
              Харилцагчид
            </button>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search product..."
              className="p-2 rounded border border-gray-300"
            />
          </div>
          <button className="bg-rose-400 px-4 py-2 rounded text-white font-semibold">
            Бараа бүртгэх
          </button>
        </div>

      <Cards props={data}/>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
          {filteredProducts.map((product) => (
            <Cards Name={product.Name} Price={product.Price}/>))}
        </div>
      </div>
    </div>
  );
}
