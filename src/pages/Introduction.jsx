/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import image from '../assets/Thebigidea.png'
import star1 from '../assets/satagra.png'
import star2 from '../assets/starpu.png'
import star3 from '../assets/star.png'
import star4 from '../assets/starp.png'
import arrow from '../assets/arrow.png'

const Introduction = () => {
    return ( 
        <div className="text-white">
            <div className="lg:flex lg:items-center py-10 lg:px-20">
                <div className= "relative lg:flex-shrink-0 lg:flex-nowrap lg:px-20 " >
                    <img className="lg:w-5 w-3 h-auto absolute lg:left-[-2rem] lg:top-[14rem] top-[5rem] left-[1.5rem]" src={star1}/>
                    <img className="block lg:h-[70vh] w-10/12 h-auto lg:w-auto  ml-auto mr-auto lg:ml-0 lg:mr-0" src={image}/>
                    <img className="absolute lg:w-20 w-10 h-auto bottom-[-1rem] lg:right-[2rem] right-[12rem]" src={arrow}/>
                </div>

                <div>
                    <h1 className="relative grid font-bold lg:text-3xl text-xl lg:leading-10 leading-6  pb-3 lg:pt-0 pt-10 lg:text-left text-center">
                        <span className="">Introduction to getlinked</span>
                        <span className="text-tetiary">techHackathon 1.0</span>
                        <img className="lg:w-5 w-3 h-auto absolute lg:right-[1.5rem] lg:top-[2rem] right-[2rem] top-[4rem]" src={star1} />
                    </h1>

                    <p className="text-sm lg:pr-20 lg:pl-0 pr-10 pl-10 lg:text-left text-center">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </p>
                </div>

            </div>
            <div className="bg-white opacity-20 w-screen h-[1px]"></div>
        </div>
     );
}
 
export default Introduction;