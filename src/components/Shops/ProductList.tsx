import React from "react";
import { useParams, Link } from "react-router-dom";


const allProducts = [
  {
  id: 1,
  image: "/pant.png",
  name: "Customized logo Design for Men and Women",
  price: "₹430/10 pieces",
  supplier: "Fashion Corp",
  category: "Apparel"

  },
  {
    id: 2,
  image: "/Tshirts.png",
  name: "Customized logo Design for Men and Women",
  price: "₹430/10 pieces",
  supplier: "Fashion Corp",
  category: "Apparel"

  },
  {
   id: 3,
  image: "/Shirt.png",
  name: "Customized logo Design for Men and Women",
  price: "₹430/10 pieces",
  supplier: "Fashion Corp",
  category: "Apparel"

  },
   {
   id: 4,
  image: "/pant.png",
  name: "Customized logo Design for Men and Women",
  price: "₹430/10 pieces",
  supplier: "Fashion Corp",
  category: "Apparel"

  },
  {
   id: 5,
  image: "/Tshirts.png",
  name: "Customized logo Design for Men and Women",
  price: "₹430/10 pieces",
  supplier: "Fashion Corp",
  category: "Apparel"

  },
   {
   id: 6,
  image: "/Shirt.png",
  name: "Customized logo Design for Men and Women",
  price: "₹430/10 pieces",
  supplier: "Fashion Corp",
  category: "Apparel"

  },

  // Add more with unique `id` and correct `category`...
];


const ProductList = () => {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);

  // Filter by category
 const filteredProducts = allProducts.filter(
  (product) =>
    product.category &&
    product.category.toLowerCase() === decodedCategory.toLowerCase()
);


  return (
    <div className="p-4 w-[600px] rounded-xl">
        <button>
              <Link to={`/Shop`} className="text-sm text-blue-600 hover:underline">
            &lt; Back to Apparel
          </Link>
                  </button>
      <h2 className="text-xl font-semibold mb-4 ">
        Products in: {decodedCategory}
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
          
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className=" rounded-xl border rounded-lg p-3 flex flex-col items-center hover:shadow-md cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain mb-2"
                  onError={(e) => {
                    e.target.src = "/fallback.png"; // fallback image if not found
                  }}
                />
                {/* <p className="text-center font-medium">{product.name}</p> */}
                {/* <p className="mt-2"> {product.discription}</p> */}
            {/* <br/> */}
             {/* <p className="mt-2 text-black font-bold">{product.price}</p>
               <button className="mt-2 bg-gradient-to-r from-blue-800 to-purple-700 text-white text-sm px-4 py-2 rounded-xl">
  Gradient Button
</button> */}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found for this category.</p>
      )}
    </div>
  );
};

export default ProductList;
