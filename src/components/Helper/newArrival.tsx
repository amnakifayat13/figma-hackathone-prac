import Image from "next/image"

export default function NewArrival(){
    return(
       <div className="grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-10">
         <div className="relative bg-black w-[22rem] h-[24rem] md:w-[24rem] md:h-[26rem] md:ml-72 ">
            <div className="absolute mt-8">
                <Image src="/n1.png" alt="n1" width={411} height={411} 
                />
                
            </div >
            <div className="mt-72 absolute ml-4">
            <h2 className="text-white">Play Station</h2>
            <p className="text-white text-xs">Black and white version of the P55</p>
            <p className="text-white text-xs">coming out of Sale</p>
            <button className="underline text-white mt-2">Shop Now</button>

            </div>
        </div>
        <div>
            <div className="relative bg-black w-[22rem] h-[12rem] md:ml-10 mt-2">
                <div className="absolute ml-40 mt-16">
                <Image src="/n2.png" alt="n2" width={250} height={250} />
                </div>
                <div className="absolute ml-4 mt-20">
                    <h2 className="text-white">Women's Collection</h2>
                    <p className="text-white text-xs">Featured Womens' collection that <br/> give you another vibe.</p>
                    <button className="underline text-white mt-2">Shop Now</button>
                </div>
                 
            </div>
            <div className="flex mt-10 ">
                <div className="relative bg-black w-[10rem] h-[11rem] ml-10">
                <div className="absolute mt-10 ml-8">
                <Image src="/n3.png" alt="n2" width={100} height={100} />
                </div>
                <div className="absolute ml-4 mt-20">
                    <h2 className="text-white">Speakers</h2>
                    <p className="text-white text-xs">Amazon Wireless Speakers</p>
                    <button className="underline text-white mt-2 ">Shop Now</button>
                </div>
                


                </div>
                <div className="relative bg-black w-[10rem] h-[11rem] ml-10 ">
                <div className="absolute mt-8 ml-8">
                <Image src="/n4.png" alt="n2" width={100} height={100} />
                </div>
                <div className="absolute ml-4 mt-20">
                    <h2 className="text-white">Perfume</h2>
                    <p className="text-white text-xs">Gucci intense OUD EDP</p>
                    <button className="underline text-white mt-2 ">Shop Now</button>
                </div>
                


                </div>
            </div>
            
            
        </div>
       </div>
    )
}