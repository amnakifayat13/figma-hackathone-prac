"use client"; 

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import products from "../../../../data/products";
import Sec from "@/components/Helper/seondary";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to handle decrement
  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 
  };
  const router = useRouter();
  const { id } = params;

  // Find the product by ID
  const product = products.find((product) => product.id === parseInt(id));

  // Handle case where product is not found
  if (!product) {
    return <p>Product not found.</p>;
  }

  // Find related items (same category but different ID)
  const relatedItems = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
 
  

  return (
    <div className="p-8">
      {/* Product Details Section */}
      <div className="flex md:ml-60">
      <div> <Image src={product.imageUrl} alt={product.name} width={300} height={300} className="w-72 h-72 bg-slate-300" /></div>
      <div className="mb-8 md:ml-20">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg">Price: ${product.price}</p>
        <p>Discount: {product.discount}%</p>
        <p>{product.description}</p>
        <div className="w-60 h-[1px] bg-slate-300 mt-4"></div>
        <div className="flex">
        <p>Colors:</p>
        <div className="flex gap-1 mt-2 ml-2">
        <div className="selection-circle">
        <div className="circle"></div>
        </div>
        <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
        </div>
        
        
        </div>
        <div className="mt-10">Size:
          <span ><button className="  border  ml-2  rounded-[5px] w-8 h-8 hover:text-white hover:bg-red-600 ">xs</button></span>
          <span ><button className="  border  ml-2  rounded-[5px] w-8 h-8 hover:text-white hover:bg-red-600 ">s</button></span>
          <span ><button className="  border  ml-2  rounded-[5px] w-8 h-8 hover:text-white hover:bg-red-600 ">M</button></span>
          <span ><button className="  border  ml-2  rounded-[5px] w-8 h-8 hover:text-white hover:bg-red-600 ">L</button></span>
          <span ><button className="  border  ml-2  rounded-[5px] w-8 h-8 hover:text-white hover:bg-red-600 ">XL</button></span>
          
        </div>
        <div className="flex  mt-10 ">
      {/* Decrement Button */}
      <button
        onClick={decrementQuantity}
        className=" w-8 h-8 bg-gray-200 text-gray-700 font-bold  shadow hover:bg-red-500 hover:text-white"
      >
        -
      </button>

      {/* Quantity Display */}
      <div className=" flex justify-center items-center w-20 h-8 bg-gray-100 text-gray-800 font-semibold rounded-md border border-gray-300">
        {quantity}
      </div>

      {/* Increment Button */}
      <button
        onClick={incrementQuantity}
        className=" w-8 h-8 bg-gray-200 text-gray-700 font-bold  shadow hover:bg-red-600 hover:text-white"
      >
        +
      </button>
      <Button variant={"destructive"} className="ml-4">Buy Now</Button>
      <div className="w-9 h-9 border flex items-center justify-center ml-4">
      <Heart size={10} className=" w-6 h-6 hover:fill-red-500 "/>
      </div>
    </div>
    <div className="flex gap-4 mt-10 border md:w-96 h-16">
      <div className="ml-2"><Image src="/icon-delivery.png" alt="delivery" width={50} height={50}/></div>
      <div>
        <h4 className="font-semibold">Free Delivery</h4>
        <p className="text-xs underline mt-2">Enter your postal code for Delivery Availability</p>
      </div>
    </div>
    <div className="flex gap-4 md:w-96 h-16 border">
      <div className="ml-2"><Image src="/icon-return.png" alt="delivery" width={50} height={50}/></div>
      <div>
        <h4 className="font-semibold">Return Delivery</h4>
        <p className="text-xs underline mt-2">Free 30 Days Delivery Returns <button className="underline"> Deatil</button></p>
      </div>
    </div>
      </div>
      
      </div>

      {/* Related Products Section */}
      <div>
      
        <div className="flex space-x-4 mt-10  ">
       <Sec/>
       <h2 className="text-red-700 mt-2 font-semibold  ">Related Item</h2>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-10 md:ml-20">
          {relatedItems.map((product) => (
            <Link key={product.id} href={`/products/productDetails/${product.id}`}>
              <div>
                {/* Product Card */}
                <div className="relative w-[16rem] h-[16rem] mx-auto p-4 shadow-lg bg-slate-300">
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-[5px]">
                    {product.discount}%
                  </div>
                  {/* Product Image */}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={150}
                    height={120}
                    className="mt-8 ml-8 h-40"
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
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-black text-white px-4 py-2 text-sm w-full hover:bg-black">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Product Details */}
                <div className="text-center mr-20 mt-4">
                  <p className="text-sm"> {product.name}</p>
                  <div className="flex gap-4 justify-center mr-20">
                    <p className="text-red-500 text-sm">${product.price}</p>
                    <p className="text-slate-600 line-through text-sm">$160</p>
                  </div>
                  <div className="text-yellow-500 text-2x mr-20">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
