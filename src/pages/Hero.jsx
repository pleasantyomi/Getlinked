/* eslint-disable no-unused-vars */
import flare1 from '../assets/Purple-Lens-Flare-PNG.png'
import metrix from '../assets/metrix 1.png'
import chain from '../assets/chain-9365116-7621444.png'
import creative from '../assets/Creative 1.png'
import spark from '../assets/1f4a5.png'
import man from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import world from '../assets/Image 1.png'


const Hero = () => {
    return ( 
        <div className="lg:relative overflow-hidden">
            <img className="absolute right-0" src={metrix} />
            <div className="lg:flex text-white lg:pl-20">
                <div className="lg:w-6/12 lg:pt-32 pt-10">
                    <div className="lg:flex lg:items-end font-bold lg:text-[60px] text-[40px] leading-none">
                        <div className="">
                          <h1 className="block ml-auto mr-auto text-center lg:text-left">getlinked Tech Hackathon <span className="text-tetiary">1.0</span> </h1>
                        </div>

                        {/* <div className="">
                            <img className="w-10 h-auto" src={chain}/>
                            <img className="w-10 h-auto" src={spark}/>
                        </div> */}
                    </div>

                    <p className="text-base w-9/12 lg:mt-5 mt-3 text-center ml-auto mr-auto block lg:text-left lg:ml-0 lg:mr-0">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

                    <a href="/Register" className="lg:mt-10 mt-4 ml-auto mr-auto lg:ml-0 lg:mr-0 block text-white font-semibold bg-gradient-to-r from-gradient1 from-0% via-gradient2 via-[56.42%]  to-gradient4 px-10 to-100% py-2 rounded-sm">Register</a>

                    <p className="text-[40px] font-primaryText lg:mt-20 mt-5 l-auto mr-auto lg:ml-0 lg:mr-0 text-center lg:text-left ">
                        <span className="pr-4">00<span className="text-sm">H</span></span>
                        <span className="pr-4">00<span className="text-sm">M</span></span>
                        <span className="pr-4">00<span className="text-sm">S</span></span>
                    </p>
                </div>

                <div className="relative">
                    <img src={man}/>
                    <img className="absolute top-0 right-0" src={world} />
                </div>
            </div>


            <div className="bg-white opacity-20 w-screen h-[1px]"></div>

        </div>
        
     );
}
 
export default Hero;