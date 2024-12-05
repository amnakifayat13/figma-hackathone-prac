import Link from "next/link"
import Image from "next/image"
import SearchBox from "../components/Helper/searchBox"
import {  ArrowBigDownDashIcon, HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react"
import Menu from "./Helper/menu"


export default function Nav(){
    return(
<>
<div className="hidden md:flex justify-between items-center bg-black text-white text-sm h-14">
    <div>
        <p className="ml-[24rem]">Summer Sale for All Swim Suits And Free Express Delivery-OFF 50% </p>
    </div>
    <div>
        <button className="mr-20 underline">Shop Now</button>
    </div>
    
    <div className="lg:basis-1/4 lg:text-center text-right text-[12px] ">
                        <select className="text-white border-none bg-black" name="" id="">
                            <option value="">English</option>
                            <option value="">Urdu</option>
                            <option value="">Arabic</option>
                        </select>
                    </div>
</div>
<div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
            <div className="flex items-center justify-around w-[95%] md:w-4/5 mx-aotu h-full">
            {/* logo */}
            <Link href="/">
            <button className="ml-4 md:ml-24 text-xl sm:2xl md:3xl xl:4xl font-bold">Exclusive</button>
            </Link>
            <div>
                <ul className="  hidden md:flex gap-10 font font-semibold cursor-pointer ml-48">
                    <li className="nav__link"><Link href="/">Home</Link></li>
                    <li className="nav__link"><Link href="/">Contact</Link></li>
                    <li className="nav__link"><Link href="/">About</Link></li>
                    <li className="nav__link"><Link href="/">Signup</Link></li>
                </ul>
            </div>
           
            
            {/* icons */}
            <div className="flex items-center space-x-6 "> 
                {/* search box */}
                <SearchBox/>
                <HeartIcon size={26} cursor={"pointer"}/>
                {/* shopping cart  button */}
                <ShoppingCartIcon/>
                <div>
                <Menu/>
            </div>
               
            </div>
            </div>
        </div>
</>
    )
}