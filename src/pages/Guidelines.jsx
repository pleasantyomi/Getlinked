/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import sitting from '../assets/74501591.png'
import flare1 from '../assets/Purple-Lens-Flare-PNG.png'
import image from '../assets/Thebigidea.png'
import star1 from '../assets/satagra.png'
import star2 from '../assets/starpu.png'
import star3 from '../assets/star.png'
import star4 from '../assets/starp.png'
import ellipse from '../assets/Ellipse1.png'


const Guidelines = () => {
    return ( 
        <div className="relative">
            <div className="lg:flex lg:items-center lg:px-20 lg:pb-0 pb-10">
                <img className="lg:hidden block ml-auto mr-auto" src={sitting}/>
                <div className="lg:px-20 relative w-fit">
                    <h1 className=" grid font-bold lg:text-3xl text-xl lg:leading-10 leading-6  pb-5 lg:text-left text-center">
                        <img className="w-3 lg:w-5 h-auto absolute lg:top-[-2rem] lg:right-[14rem] right-[2rem] top-[3rem]" src={star1}/>
                        <span>Rules and</span>
                        <span className="text-tetiary">Guidelines</span>
                    </h1>

                    <p className="text-sm lg:text-left text-center lg:px-0 px-10 ">
                      Our tech hackathon is a melting pot of visionaries, and its purpose is as
                      clear as day: to shape the future. Whether you're a coding genius, a 
                      design maverick, or a concept wizard, you'll have the chance to transform 
                      your ideas into reality. Solving real-world problems, pushing the boundaries
                      of technology, and creating solutions that can change the world,
                      that's what we're all about!
                    </p>

                    <img className="w-3 lg:w-5 h-auto absolute lg:bottom-[-2rem] lg:right-0 top-[-15rem] left-[1.2rem]" src={star3} />
                    <img className="w-3 lg:w-5 h-auto absolute lg:bottom-[-2rem] lg:right-0 bottom-[-2rem] left-[8rem]" src={star3} />

                </div>

                <div className="relative flex-nowrap flex-shrink-0">
                    <img className=" h-[90vh] hidden lg:block" src={sitting} />
                    {/* <img className="absolute top-[2rem] right-[4rem] " src={ellipse}/> */}
                </div>
            </div>
            {/* <img className="absolute z-0 right-[-55%] top-[0] " src={flare1}/> */}
            <div className="bg-white opacity-20 w-screen h-[1px]"></div>
        </div>
     );
}
 
export default Guidelines;