import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
  
export default function Menu(){
    return (
        <div className="md:hidden">
            <Dialog >
  <DialogTrigger>
        <MenuIcon/>
  </DialogTrigger>
  <DialogContent>
  <h1 className="text-2xl text-white underline">Menu</h1>
  <ul className="block gap-10   font font-semibold cursor-pointer ">
                    <li className="nav__link   text-white mt-3"><Link href="/">Home</Link></li>
                    <li className="nav__link   text-white mt-3"><Link href="/">Contact</Link></li>
                    <li className="nav__link   text-white mt-3"><Link href="/">About</Link></li>
                    <li className="nav__link   text-white mt-3"> <Link href="/">Signup</Link></li>
                </ul>
                <h1 className="text-2xl text-white underline">Categories</h1>
                <ul className=" text-sm">
            <li className=" nav__link mt-3 text-white">Women's Fashion </li>
            <li className=" nav__link mt-3 text-white">Men's Fashion</li>
            <li className=" nav__link mt-3 text-white">Electronics</li>
            <li className=" nav__link mt-3 text-white">Home & Life Style</li>
            <li className=" nav__link mt-3 text-white">Medicine</li>
            <li className=" nav__link mt-3 text-white">Sports & Outdoor</li>
            <li className=" nav__link mt-3 text-white">Baby's & Toys</li>
            <li className=" nav__link mt-3 text-white">Groceries & Pets</li>
            <li className=" nav__link mt-3 text-white">Health & Beauty</li>
          </ul>
  </DialogContent>
</Dialog>

        </div>
    )
}