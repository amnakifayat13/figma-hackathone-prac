import Image from "next/image"
export default function Footer(){
    return(
        <div className="w-full flex flex-col items-center mt-16 justify-center bg-black py-2 px-10 pt-10 pb-5 overflow-x-hidden">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center sm:text-left">
        <div className="space-y-4">
            <h2 className="text-[24px] font-inter font-bold text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                Exclusive</h2>
                <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                Subscribe</h2>
                    <p className="text-[16px] font-normal text-[#FAFAFA] w-[206px] mx-auto sm:mx-0">
                        Get 10% off your first order</p>
                <div className="flex items-center bg-black text-[#FAFAFA] w-[200px] h-[48px] border border-[#FAFAFA] rounded-md hover:border-[#DB4444] shadow-lg transition duration-300 px-3 mx-auto sm:mx-0">
                    <input type="email" placeholder="Enter your email" className="w-[150px] bg-black text-[#FAFAFA] outline-none px-1"/>
                    <svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth="0"
  viewBox="0 0 1024 1024"
  version="1.1"
  className="w-[24px] h-[24px] hover:scale-125 transition duration-300"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
</svg>
                            </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                Support</h2>
                                <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
                                <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    exclusive@gmail.com</p>
                            <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                +88015-88888-9999</p>
                                </div>
                                <div className="space-y-4">
                                <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Account</h2>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                        My Account</p>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Login/Register</p>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Cart</p>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Wishlist</p>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Shop</p>
                                    </div>
                                    <div className="space-y-4">
                                    <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Quick Links</h2>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Privacy Policy</p>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Terms Of Use</p>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    FAQ</p>
                                    <p className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Contact</p>
                                    </div>
                                    <div className="space-y-4">
                                    <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
                                    Download App</h2>
                                    <p className="text-[14px] font-normal text-[#FAFAFA]">
                                    Save $3 with App New User Only</p>
                                    <div className="flex justify-center sm:justify-start">
                                        
                                        </div>
                                        <div className="flex justify-center sm:justify-start gap-4 w-[168px] h-[24px] text-[#FAFAFA]">
                                            <svg stroke="currentColor" fill="none" stroke-width="2" 
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                     className="w-[24px] h-[24px] hover:scale-125 hover:text-[#DB4444] transition duration-300"
                                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                    </path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" 
                                    className="w-[24px] h-[24px] hover:scale-125 hover:text-[#DB4444] transition duration-300"
                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Twitter">
                                <path d="M19.913,5.322a1.034,1.034,0,0,1,.837,1.629L19.708,8.432c-.064,5.086-1.765,8.539-5.056,10.264A10.917,10.917,0,0,1,9.6,19.835a12.233,12.233,0,0,1-6.2-1.524.76.76,0,0,1-.317-.8.768.768,0,0,1,.63-.6,20.6,20.6,0,0,0,3.745-.886C2,13.5,3.19,7.824,3.71,6.081a1.028,1.028,0,0,1,1.729-.422,9.931,9.931,0,0,0,5.995,2.95A4.188,4.188,0,0,1,12.725,5.3a4.125,4.125,0,0,1,5.7.02ZM4.521,17.794c1.862.872,6.226,1.819,9.667.016,2.955-1.549,4.476-4.732,4.521-9.461a.771.771,0,0,1,.142-.436l1.081-1.538-.041-.053c-.518-.007-1.029-.014-1.55,0a.835.835,0,0,1-.547-.221,3.13,3.13,0,0,0-4.383-.072,3.174,3.174,0,0,0-.935,2.87.646.646,0,0,1-.154.545.591.591,0,0,1-.516.205A10.924,10.924,0,0,1,4.722,6.354c-.67,2.078-1.52,7.094,3.869,9.065a.632.632,0,0,1,.416.538.625.625,0,0,1-.3.6A13.178,13.178,0,0,1,4.521,17.794ZM11.875,8.65h0Zm7.793-.161,0,0Z">
                                </path></g></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                                 className="w-[24px] h-[24px] hover:scale-125 hover:text-[#DB4444] transition duration-300"
                                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path></svg><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" 
                                stroke-linejoin="round" 
                                className="w-[24px] h-[24px] hover:scale-125 hover:text-[#DB4444] transition duration-300" 
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2">
                                </circle>
                                </svg>
                                </div>
                                </div>
                                </div>
                                <div className="w-full border-t border-gray-800 mt-8">
                                    </div>
                                    <div className="mt-2 text-center text-slate-700 text-[14px]">© CopyRight Rimel 2022. All rights reserved.
                                        </div>
                                        </div>
    )
}