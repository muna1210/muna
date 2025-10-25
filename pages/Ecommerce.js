import { useState } from "react";

export default function Home() {

  const products = [
    { id: 1, Name: "Acme Circles T-Shirt", Price: 20, Image: "/tshirt.png" },
    { id: 2, Name: "Acme Drawstring Bag", Price: 12, Image: "/bag.png" },
    { id: 3, Name: "Acme Cup", Price: 15, Image: "/cup.png" },
    { id: 4, Name: "Acme Hoodie", Price: 50, Image: "/hoodie.png" },
    { id: 5, Name: "Acme Baby Onesie", Price: 10, Image: "/onesie.png" },
    { id: 6, Name: "Acme Baby Cap", Price: 10, Image: "/cap.png" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const Cards = ({ product }) => (
    <div
      onClick={() => setSelectedProduct(product)}
      className="bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition p-4 cursor-pointer text-center"
    >
      <img
        src={product.Image}
        alt={product.Name}
        className="w-full h-56 object-contain mb-3"
      />
      <h1 className="text-lg font-semibold text-gray-800">{product.Name}</h1>
      <p className="text-blue-600 font-medium">${product.Price} USD</p>
    </div>
  );

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <button
          onClick={() => setSelectedProduct(null)}
          className="text-gray-600 text-sm mb-4 hover:underline"
        >
          ← Back to Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <img
            src={selectedProduct.Image}
            alt={selectedProduct.Name}
            className="w-full h-auto object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {selectedProduct.Name}
            </h1>
            <p className="text-blue-600 font-semibold text-lg mb-4">
              ${selectedProduct.Price} USD
            </p>
            <p className="text-gray-600 mb-6">
              60% combed ringspun cotton / 40% polyester jersey tee.  
              Soft, durable, and stylish for everyday wear.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        ACME STORE
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <Cards key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

