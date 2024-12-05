import {  CameraIcon, ComputerIcon, Gamepad, Headphones, Phone, PhoneIcon, WatchIcon } from "lucide-react"

export default function CategoryOption(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
        <div className="relative w-[10rem] h-[10rem] mx-auto p-4  shadow-lg border mt-20 hover:bg-red-700 hover:text-white">
          <div className=" flex items-center justify-center mt-6">
            <PhoneIcon width={50} height={50} />
          </div>
          <p className="text-xs text-center mt-4">Phones</p>
        </div>

        <div className="relative w-[10rem] h-[10rem] mx-auto p-4  shadow-lg border mt-20 hover:bg-red-700 hover:text-white">
          <div className=" flex items-center justify-center mt-6">
            <ComputerIcon width={50} height={50} />
          </div>
          <p className="text-xs text-center mt-4">Computers</p>
        </div>

        <div className="relative w-[10rem] h-[10rem] mx-auto p-4  shadow-lg border mt-20 hover:bg-red-700 hover:text-white">
          <div className=" flex items-center justify-center mt-6">
            <WatchIcon width={50} height={50} />
          </div>
          <p className="text-xs text-center mt-4">Smart Wathches</p>
        </div>

        <div className="relative w-[10rem] h-[10rem] mx-auto p-4  shadow-lg border mt-20 hover:bg-red-700 hover:text-white">
          <div className=" flex items-center justify-center mt-6">
            <CameraIcon width={50} height={50} />
          </div>
          <p className="text-xs text-center mt-4">Camera</p>
        </div>

        <div className="relative w-[10rem] h-[10rem] mx-auto p-4  shadow-lg border mt-20 hover:bg-red-700 hover:text-white">
          <div className=" flex items-center justify-center mt-6">
            <Headphones  width={50} height={50} />
          </div>
          <p className="text-xs text-center mt-4">Headphones</p>
        </div>

        <div className="relative w-[10rem] h-[10rem] mx-auto p-4  shadow-lg border mt-20 hover:bg-red-700 hover:text-white">
          <div className=" flex items-center justify-center mt-6">
            <Gamepad width={50} height={50} />
          </div>
          <p className="text-xs text-center mt-4">Gaming</p>
        </div>
       </div>
    )
}