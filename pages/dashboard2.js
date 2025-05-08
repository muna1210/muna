import { useRouter } from "next/router";
import { useState } from "react";

const data = [
  { id: 1, Name: "Sneakers", },
  { id: 2, Name: "Pants",  },
  { id: 3, Name: "T-shirt",  },
  { id: 4, Name: "Hoodie", },
  { id: 5, Name: "Skirt",  },
];

export default function News() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = data.filter((products) =>
      products.Name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/5 h-full bg-red-100">
      <img src="https://nhs.edu.mn/favicon.ico" className="w-32 h-32 mx-auto"/>
      <p className=" flex justify-center mt-4 font-semibold text-xl text-rose-400">Nest Education IT School</p>
      <p className="flex justify-center mt-2 text-lg font-medium ">Munkhnaran Ulziibayr</p>
      <p className="flex justify-center mt-2 text-lg">11Б</p>
      </div>
      <div className="w-4/5 h-full bg-rose-50 flex items-center justify-center">
      <div className=" h-3/4 w-5/6 bg-rose-200 rounded-lg"></div>
      </div>
    </div>
  );
}