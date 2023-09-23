/* eslint-disable no-unused-vars */
import flare1 from '../assets/Purple-Lens-Flare-PNG.png'
import metrix from '../assets/metrix1.png'
import chain from '../assets/chain-9365116-7621444.png'
import creative from '../assets/Creative1.png'
import spark from '../assets/1f4a5.png'
import line from '../assets/Vector4.png'
import man from '../assets/man-wearing-smart-glasses-touching-virtual-screen1.png'
import world from '../assets/Image1.png'


const Hero = () => {
    return ( 
        <div className="lg:relative overflow-hidden">
            <img className="absolute right-0" src={metrix} />
            <div className="lg:flex text-white lg:pl-20">
                <div className="lg:w-6/12 lg:pt-32 pt-5">
                    <div className="lg:hidden block pb-12">
                        <h1 className="font-semibold italic text-2xl text-center ml-auto mr-auto pt-1">Igniting a Revolution in HR Innovation</h1>
                        <img className="absolute right-[1.5rem] w-4/12" src={line}/>
                    </div>
                    <div className="lg:flex lg:items-end font-bold lg:text-[60px] text-[40px] leading-none">
                        <div className="relative">
                          <img className="absolute lg:w-10 w-6 h-auto lg:top-[-3rem] top-[-1.5rem] right-[8rem]" src={creative} />
                          <h1 className="block ml-auto mr-auto text-center lg:text-left">getlinked Tech Hackathon <span className="text-tetiary">1.0</span> </h1>
                          <img className="absolute w-14 h-auto bottom-[0rem] right-[4.5rem]" src={chain}/>
                          <img className="absolute w-10 h-auto bottom-[0.5rem] right-[2rem]" src={spark}/>
                        </div>

                        {/* <div className="">
                          
                        </div> */}
                    </div>

                    <p className="text-base w-9/12 lg:mt-5 mt-3 text-center ml-auto mr-auto block lg:text-left lg:ml-0 lg:mr-0">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

                    <a href="/Register" className="lg:mt-10 mt-4 ml-auto mr-auto lg:ml-0 lg:mr-0 block text-white font-semibold bg-gradient-to-r from-gradient1 from-0% via-gradient2 via-[56.42%]  to-gradient4  to-100% py-2 px-10 w-fit rounded-sm">Register</a>

                    <p className="text-[40px] font-primaryText lg:mt-20 mt-5 l-auto mr-auto lg:ml-0 lg:mr-0 text-center lg:text-left ">
                        <span className="pr-4">00<span className="text-sm">H</span></span>
                        <span className="pr-4">00<span className="text-sm">M</span></span>
                        <span className="pr-4">00<span className="text-sm">S</span></span>
                    </p>
                </div>

                <div>
                    <div className="relative">
                        <div className="hidden lg:block ">
                            <h1 className="font-semibold italic text-2xl text-end pr-10 pt-1">Igniting a Revolution in HR Innovation</h1>
                            <img className="absolute right-[2.5rem] w-3/12" src={line}/>
                        </div>
                      
                       <div className="relative pt-5">
                          <img src={man}/>
                          <img className="absolute top-0 right-0" src={world} />
                       </div>
                    </div>
                </div>

                
            </div>


            <div className="bg-white opacity-20 w-screen h-[1px]"></div>

        </div>
        
     );
}
 
export default Hero;