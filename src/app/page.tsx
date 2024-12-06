import BestSellingProducts from "@/components/Helper/bestSellingProducts";
import CategoryOption from "@/components/Helper/c";
import ExploreProducts from "@/components/Helper/exploreProducts";
import FlashSales from "@/components/Helper/flashSales";
import NewArrival from "@/components/Helper/newArrival";
import Sec from "@/components/Helper/seondary";
import Services from "@/components/Helper/services";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-0">
        <div className="hidden md:block ml-24  border-r border-slate-300 lg:w-60">
          <ul className="mt-10 text-sm cursor-pointer">
            <li className="mt-3">Women's Fashion </li>
            <li className="mt-3">Men's Fashion</li>
            <li className="mt-3">Electronics</li>
            <li className="mt-3">Home & Life Style</li>
            <li className="mt-3">Medicine</li>
            <li className="mt-3">Sports & Outdoor</li>
            <li className="mt-3">Baby's & Toys</li>
            <li className="mt-3">Groceries & Pets</li>
            <li className="mt-3">Health & Beauty</li>
          </ul>
        </div>
       
        <div>
          <Image
          src="/img1.png"
          alt=""
          width={820}
          height={400} 
          className=" mt-2 md:ml-10 md:mt-10"/>
        </div>
      </div>

      <div className="pt-16 pb-16">
       <div className="flex space-x-4 ">
       <Sec/>
       <h2 className="text-red-700 mt-2 font-semibold  ">Today's</h2>
       </div>
       <div className="flex mt-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl   ml-2 md:ml-24 ">Flash Sales</h1>
        <div className="flex ml-4 md:ml-40 " >
          <span>
            <p className="text-xs">Days</p>
            <p className="text-xl font-bold flex justify-center">03</p>
          </span>
          <span className="text-xl text-yellow-600 ml-2 mt-1">:</span>
          
        </div>
        <div className="flex ml-2" >
          <span>
            <p className="text-xs">Hours</p>
            <p className="text-xl font-bold flex justify-center">23</p>
          </span>
          <span className="text-xl text-yellow-600 ml-2 mt-1">:</span>
          
        </div>
        <div className="flex ml-2" >
          <span>
            <p className="text-xs ">Minutes</p>
            <p className="text-xl font-bold flex justify-center">19</p>
          </span>
          <span className="text-xl text-yellow-600 ml-2 mt-1">:</span>
          
        </div>
        <div className="flex ml-2" >
          <span>
            <p className="text-xs">Seconds</p>
            <p className="text-xl font-bold flex justify-center">56</p>
          </span>
          
          
        </div>
        <div className="hidden md:flex ml-96">
       <button><Image src="/LeftArrow.png" alt="" width={40} height={40}/></button>
       <button className="ml-2"><Image src="/RightArrow.png" alt="" width={40} height={40}/></button>
       </div>
        
       </div>
       
      </div>
      <div>
      <FlashSales/>
      <div className="flex justify-center items-center mt-20 text-white">
      <Button variant={"destructive"}>Veiw All Products</Button>
      </div>
      </div>
      <div className="pt-16 pb-16">
      <div className="flex space-x-4 ">
       <Sec/>
       <h2 className="text-red-700 mt-2 font-semibold  ">Categories</h2>
       </div>
       
        <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ml-24 mt-4">Browse By Category</h1>
       <div className="hidden md:flex mr-28">
       <button><Image src="/LeftArrow.png" alt="" width={40} height={40}/></button>
       <button className="ml-2"><Image src="/RightArrow.png" alt="" width={40} height={40}/></button>
       </div>
</div>
      <CategoryOption/>
      </div>

      <div className="pt-16 pb-16">
      <div className="flex space-x-4 ">
       <Sec/>
       <h2 className="text-red-700 mt-2 font-semibold  ">This Month</h2>
       </div>
       <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ml-24 mt-4">Best Selling Products</h1>
       <Button variant={"destructive"} className="text-white mr-28">View All</Button>
      </div>
      <div className="mt-10">
        <BestSellingProducts/>
      </div>
      </div>

      <div className="pt-16 pb-16">
        <Image src="/Frame.png" alt="frame" width={1000} height={800} className="md:ml-40"/>

      </div>
      <div className="pt-16 pb-16">
      <div className="flex space-x-4 ">
       <Sec/>
       <h2 className="text-red-700 mt-2 font-semibold  ">Our Products</h2>
       </div>
       </div>
       <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ml-24 mt-4">Browse By Category</h1>
       <div className="hidden md:flex mr-28">
       <button><Image src="/LeftArrow.png" alt="" width={40} height={40}/></button>
       <button className="ml-2"><Image src="/RightArrow.png" alt="" width={40} height={40}/></button>
       </div>
</div>
       <div>
        <ExploreProducts/>
        <div className="flex justify-center items-center mt-20 text-white">
      <Button variant={"destructive"}>Veiw All Products</Button>
      </div>
        
       </div>

      <div className="pt-16 pb-16">
      <div className="flex space-x-4 ">
       <Sec/>
       <h2 className="text-red-700 mt-2 font-semibold  ">Featured</h2>
       </div>
       <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ml-24 mt-4">New Arrival</h1>
      <div>
        <NewArrival/>
       </div>
      </div>

      <div className="pt-16 pb-16">
        <Services/>
      </div>
  

  


    </>
  );
}
