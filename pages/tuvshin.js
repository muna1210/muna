

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const items = [
    {
      id: 1,
      name: "Iphone",
      price: 2000000,
      color: "blue",
      image:
        "https://onei.lk/wp-content/uploads/2024/10/58-1-2.webp",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
    {
      id: 2,
      name: "Surron",
      price: 14500000,
      color: "Green",
      image:
        "https://cdn.shopify.com/s/files/1/0540/6644/6508/files/lightBeeX-Green.png?v=1744836704",
      subItems: ["Grip", "Bar"],
      subPrices: [20000, 140000],
    },
    {
      id: 3,
      name: "Key",
      price: 20000,
      color: "Gray",
      image:
        "https://luckyline.com/cdn/shop/products/inusekeys_6d4fba4f-26e3-44f4-badc-3a399e73c562_1920x.jpg?v=1709059736",
      subItems: ["Keychain", "Bayern"],
      subPrices: [5000, 20000],
    },
    {
      id: 4,
      name: "Ring",
      price: 2000000,
      color: "blue",
      image:
        "https://ecdn.speedsize.com/4dc0ca8f-7eea-41c7-bfcd-8e0f44f78b80/https://cdn.shopify.com/s/files/1/0602/6779/0594/products/round-diamond-ring-diamond-band-white_85ee2ac0-f1be-4aec-a23a-cdfedb992d23.png?v=1657539103",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
    {
      id: 5,
      name: "Necklace",
      price: 2000000,
      color: "G old",
      image:
        "https://m.media-amazon.com/images/I/616FVpD2cyL._AC_UF1000,1000_QL80_.jpg",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
    {
      id: 6,
      name: "Jordan",
      price: 2000000,
      color: "blue",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89b9c5f5-9049-422d-aa76-19ea5323ef58/WMNS+AIR+JORDAN+1+MID.png",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
    {
      id: 7,
      name: "Hoodie",
      price: 2000000,
      color: "blue",
      image:
        "https://shop.porsche.com/_next/image?url=https%3A%2F%2Fassets-prod.porsche.com%2Fassets%2Fcae2272a-ab1b-4c08-b2c0-2a10edda83e8.webp&w=2560&q=75",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
    {
      id: 8,
      name: "Crocs",
      price: 2000000,
      color: "blue",
      image: "https://crocs.com.my/cdn/shop/files/10001-2Y2-1.png?v=1720094682",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
    {
      id: 9,
      name: "Laptop",
      price: 2000000,
      color: "blue",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLh5Sr5Wr4qQexto-sC-deIOOExF9oaC-r-A&s",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
    {
      id: 10,
      name: "Pen",
      price: 2000000,
      color: "blue",
      image:
        "https://pictures.kartmax.in/cover/live/850x850/quality=6/sites/StAFxmqh5LfPz3ZQSdCh/product-images/wp13824-1.jpg",
      subItems: ["Case", "Camera"],
      subPrices: [20000, 20000],
    },
  ];

  return (
    <div className="h-screen w-full flex">
      <div className="h-screen w-[20%] bg-white flex flex-col items-center shadow-md">
        <img src="https://nhs.edu.mn/favicon.ico" className="h-28 m-5" />
        <p className="text-black text-lg font-bold">Nest Education IT School</p>
        <p className="text-black text-sm m-3">Bulgan Tuvshin</p>
        <p className="text-black text-sm">Class: 11b</p>
        <button className="h-12 w-64 bg-sky-500 rounded-md text-sm my-5 hover:bg-blue-300 text-black">
          Lab 1
        </button>
        <button className="h-12 w-64 bg-sky-500 rounded-md text-sm hover:bg-blue-300 text-black">
          Lab 2
        </button>
      </div>

      <div className="h-screen w-[80%] bg-gray-200 overflow-hidden">
        <div className="h-[15%] w-full flex items-center px-5 space-x-4 justify-between">
          <div className="flex items-center space-x-4">
            <button className="h-12 w-48 bg-black text-white rounded-md shadow-md text-black">
              Харилцагчид
            </button>
            <input
              type="text"
              placeholder="Хайх..."
              className="h-12 w-72 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md text-black"
            />
          </div>
          <div className="h-12 w-40 bg-yellow-500 rounded-md flex justify-center items-center shadow-md text-black font-semibold">
            Барааг бүртгэх
          </div>
        </div>

        <div className="h-[85%] w-full overflow-y-auto px-5 py-3">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md text-black">
            <thead className="bg-gray-100 text-black text-left">
              <tr>
                <th className="px-4 py-2">Зураг</th>
                <th className="px-4 py-2">Нэр</th>
                <th className="px-4 py-2">Үнэ</th>
                <th className="px-4 py-2">Өнгө</th>
                <th className="px-4 py-2">Дэд зүйлс</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-gray-50 text-black"
                >
                  <td className="px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-contain rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium text-black">
                    {item.name}
                  </td>
                  <td className="px-4 py-2">{item.price.toLocaleString()}₮</td>
                  <td className="px-4 py-2">{item.color}</td>
                  <td className="px-4 py-2">
                    <ul className="space-y-1">
                      {item.subItems.map((sub, i) => (
                        <li
                          key={i}
                          className="flex justify-between w-44 text-black"
                        >
                          <span>{sub}</span>
                          <span>{item.subPrices[i].toLocaleString()}₮</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}