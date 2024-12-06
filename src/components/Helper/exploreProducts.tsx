import Image from "next/image"
import Link from "next/link"
import products from "../../data/products"

export default function ExploreProducts(){
  const category = "Browse By Category"; // Change this to the desired category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/productDetails/${product.id}`}>
            <div className="mb-10 " >
            {/* Product Image */}
          <div className="relative w-[16rem] h-[16rem] mx-auto p-4  shadow-lg bg-slate-300 ">
          
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={100}
              height={100}
              className="mt-8 ml-8"
            />
        
            {/* Icons (Eye & Heart) */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
             
        
              {/* Heart Icon */}
              <button className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.35l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              </button>
               {/* Eye Icon */}
               <button className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.364 1.247-1.031 2.433-1.964 3.376A13.972 13.972 0 0112 19a13.972 13.972 0 01-7.578-3.624A8.978 8.978 0 012.458 12z"
                  />
                </svg>
              </button>
            </div>
              {/* Add to Cart Button */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                <button className="bg-black text-white px-4 py-2 text-sm w-full hover:bg-black">
                  Add to Cart
                </button>
              </div>
        
          </div>
          <div className="text-center mr-28 mt-4 ">
            <p className="text-sm ml-4"> {product.name}</p>
            <div className="flex gap-4 justify-center mr-16">
              <p className="text-red-500 text-sm mr-6">${product.price}</p>
             
            </div>
            <div  className="text-yellow-500 text-2x mr-10">
            &#9733; &#9733; &#9733; &#9733; &#9733;{product.reviews}
            </div>
          </div>
          </div>
          </Link>

          ))}
        
  </div >
    
    )
}