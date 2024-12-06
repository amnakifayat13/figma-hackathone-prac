import Image from "next/image"

export default function Services(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 md:ml-24 ml-10">
            <div>
                <button><Image src="/se1.png" alt="se1" width={50} height={50} className="ml-20"/></button>
                <h2 className=" font-semibold mt-4">FREE AND FAST DELIVERY</h2>
                <p className="text-xs">Free delivery for all customers over $140</p>
            </div>

            <div>
                <button><Image src="/se2.png" alt="se2" width={50} height={50} className="ml-20"/></button>
                <h2 className=" font-semibold mt-4">24/7 CUSTOMER SERVICES</h2>
                <p className="text-xs">Friendly 24/7 customer support</p>
            </div>

            <div>
                <button><Image src="/se3.png" alt="se3" width={50} height={50} className="ml-20"/></button>
                <h2 className=" font-semibold mt-4">MONEY BACK GUARANTEE</h2>
                <p className="text-xs">We return money within 30 days</p>
            </div>
        </div>
        </>
    )
}