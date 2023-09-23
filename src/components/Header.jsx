import "./Header.css"
import { useState } from "react";
import close from '../assets/close.png'

const Header = () => {
    const [open, isOPen] = useState(false)


    return ( 
        <div className="relative w-screen">
            <div className="flex justify-between items-center lg:px-20 px-10 pt-5">
                <div className="mr-44">
                    <a href="/" className="font-bold text-[24px] text-secondaryText">
                        <span className="text-white">get</span>
                        <span className="text-tetiary">linked</span>
                    </a>
                </div>

                <div className="text-white hidden lg:flex gap-5">
                    <a>Timeline</a>
                    <a>Overview</a>
                    <a>FAQs</a>
                    <a href="/Contact">Contact</a>
                </div>
 
                <div>
                   <a href="/Register"><button className="hidden lg:block text-white font-semibold bg-gradient-to-r from-gradient1 from-0% via-gradient2 via-[56.42%]  to-gradient4 px-10 to-100% py-2 rounded-md">Register</button></a>
                </div>

                <button onClick={()=> isOPen(prev => !prev)} className="lg:hidden grid gap-1 relative">
                    <div className="bg-white w-[10px] h-1 items-start"></div>
                    <div className="bg-white w-[20px] h-1"></div>
                    <div className="bg-white w-[10px] h-1 "></div>
                </button>
            </div>

            <div className="bg-white opacity-20 w-screen h-[1px] mt-4"></div>

            <div className="lg:hidden">
               <div className={open? "showMenuNav": "hideMenuNav"}>
                    <div className="bg-primary w-screen text-white font-semibold text-lg grid pt-8 pl-14 gap-5">
                        <div className="relative pb-14">
                           <button onClick={()=> isOPen(false)} className="block h-10 w-10 rounded-full border border-tetiary absolute right-0 mr-10 mb-10">
                              <img className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-3 w-3" src={close}/>
                           </button>
                        </div>
                        <a>Timeline</a>
                        <a>Overview</a>
                        <a>FAQs</a>
                        <a href="/Contact">Contact</a>
                        <a href="/Register"><button className="block w-fit text-white font-semibold bg-gradient-to-l from-secondary to-tetiary px-10 py-2 rounded-sm">Register</button></a>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Header;