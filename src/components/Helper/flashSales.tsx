import Image from "next/image"
export default function FlashSales(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div >
    {/* Product Image */}
  <div className="relative w-[16rem] h-[16rem] mx-auto p-4  shadow-lg bg-slate-300">
  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-[5px]">
    -40% 
  </div>
    <Image
      src="/img2.png"
      alt="Product"
      width={172}
      height={152}
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
  <div className="text-center mr-20 mt-4">
    <p className="text-sm "> HAVIT HV-G92 Gamepade</p>
    <div className="flex gap-4 justify-center mr-20">
      <p className="text-red-500 text-sm">$120</p>
      <p className="text-slate-600 line-through text-sm">$160</p>
    </div>
    <div  className="text-yellow-500 text-2x mr-20">
    &#9733; &#9733; &#9733; &#9733; &#9733;
    </div>
  </div>
  </div>
  <div >
    {/* Product Image */}
  <div className="relative w-[16rem] h-[16rem] mx-auto p-4  shadow-lg bg-slate-300">
  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-[5px]">
    -35% 
  </div>
    <Image
      src="/img3.png"
      alt="Product"
      width={172}
      height={152}
      className="mt-12 ml-8"
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
  <div className="text-center mr-20 mt-4">
    <p className="text-sm "> AK-900 wired Keyboard</p>
    <div className="flex gap-4 justify-center mr-20">
      <p className="text-red-500 text-sm">$960</p>
      <p className="text-slate-600 line-through text-sm">$1160</p>
    </div>
    <div  className="text-yellow-500 text-2x mr-20">
    &#9733; &#9733; &#9733; &#9733; 
    </div>
  </div>
  </div>
  <div >
    {/* Product Image */}
  <div className="relative w-[16rem] h-[16rem] mx-auto p-4  shadow-lg bg-slate-300">
  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-[5px]">
    -30% 
  </div>
    <Image
      src="/img4.png"
      alt="Product"
      width={172}
      height={152}
      className="mt-12 ml-6"
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
  <div className="text-center mr-20 mt-4">
    <p className="text-sm ">IPS LCD Gaming Monitor</p>
    <div className="flex gap-4 justify-center mr-20">
      <p className="text-red-500 text-sm">$370</p>
      <p className="text-slate-600 line-through text-sm">$400</p>
    </div>
    <div  className="text-yellow-500 text-2x mr-20">
    &#9733; &#9733; &#9733; &#9733; &#9733;
    </div>
  </div>
  </div>
  <div >
    {/* Product Image */}
  <div className="relative w-[16rem] h-[16rem] mx-auto p-4  shadow-lg bg-slate-300">
  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-[5px]">
    -25% 
  </div>
    <Image
      src="/img5.png"
      alt="Product"
      width={110}
      height={90}
      className="mt-8 ml-12"
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
  <div className="text-center mr-20 mt-4">
    <p className="text-sm "> S-Series Comfort Chair</p>
    <div className="flex gap-4 justify-center mr-20">
      <p className="text-red-500 text-sm">$375</p>
      <p className="text-slate-600 line-through text-sm">$400</p>
    </div>
    <div  className="text-yellow-500 text-2x mr-20">
    &#9733; &#9733; &#9733; &#9733; 
    </div>
  </div>
  </div>
        </div>
    )
}