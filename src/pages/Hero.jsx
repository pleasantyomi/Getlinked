/* eslint-disable no-unused-vars */
import flare1 from '../assets/Purple-Lens-Flare-PNG.png'
import metrix from '../assets/metrix1.png'
import chain from '../assets/chain-9365116-7621444.png'
import creative from '../assets/Creative.png'
import spark from '../assets/1f4a5.png'
import line from '../assets/line.png'
import man from '../assets/man-wearing-smart-glasses-touching-virtual-screen1.png'
import world from '../assets/Image1.png'
import star1 from '../assets/satagra.png'
import star2 from '../assets/starpu.png'
import star3 from '../assets/star.png'
import star4 from '../assets/starp.png'


const Hero = () => {
    return ( 
        <div className="lg:relative overflow-hidden">
            <img className="absolute right-0" src={metrix} />
            <div className="lg:flex text-white lg:pl-20">
                <div className="lg:w-6/12 lg:pt-32 pt-5">
                    <div className="relative lg:hidden block pb-12 w-fit mr-auto ml-auto">
                        <h1 className="font-semibold italic text-lg text-center ml-auto mr-auto pt-1">Igniting a Revolution in HR Innovation</h1>
                        <img className="absolute right-[0.5rem] w-4/12" src={line}/>
                    </div>
                    <div className="lg:flex lg:items-end font-bold lg:text-[60px] text-[30px] leading-none">
                        <div className="relative">
                            <img className="lg:w-5 w-3 h-auto absolute lg:top-[-6rem] top-[-2rem] left-[9rem] lg:left-[2rem]" src={star3}/>
                            <img className="lg:w-5 w-2 h-auto absolute lg:left-[36rem] lg:top-[-4rem] top-[-2rem] right-[3rem]" src={star4}/>
                            <img className="lg:w-5 w-2 h-auto absolute lg:left-[25rem] lg:top-[20rem] right-[5rem] bottom-[-8rem]" src={star4}/>

                            <div className="relative w-fit ml-auto mr-auto">
                                <img className="absolute lg:w-10 w-6 h-auto lg:top-[-3rem] lg:right-[2rem] top-[-1.6rem] right-[0.5rem]" src={creative} />
                                <h1 className="grid ml-auto mr-auto text-center lg:text-left">
                                    <span>getlinked Tech</span>
                                    <span>Hackathon <span className="text-tetiary">1.0</span> </span> 
                                </h1>

                            </div>
                          
                          <img className="absolute hidden w-14 h-auto bottom-[0rem] right-[4.5rem]" src={chain}/>
                          <img className="absolute hidden w-10 h-auto bottom-[0.5rem] right-[2rem]" src={spark}/>
                        </div>
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