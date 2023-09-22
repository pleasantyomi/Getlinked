/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import sitting from '../assets/7450159 1.png'
import flare1 from '../assets/Purple-Lens-Flare-PNG.png'


const Guidelines = () => {
    return ( 
        <div className="relative">
            <div className="lg:flex lg:items-center lg:px-20 lg:pb-0 pb-10">
                <img className="lg:hidden block ml-auto mr-auto" src={sitting}/>
                <div className="lg:px-20">
                    <h1 className="grid font-bold leading-10 text-3xl pb-5 lg:text-left text-center">
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
                </div>

                <div className="flex-nowrap flex-shrink-0">
                    <img className="z-10 h-[90vh] hidden lg:block" src={sitting} />
                </div>
            </div>
            {/* <img className="absolute z-0 right-[-55%] top-[0] " src={flare1}/> */}
            <div className="bg-white opacity-20 w-screen h-[1px]"></div>
        </div>
     );
}
 
export default Guidelines;