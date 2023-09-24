/* eslint-disable no-unused-vars */
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import linkedin from '../assets/ri_linkedin-fill.png'
import instagram from '../assets/ig.png'
import location from '../assets/location.png'
import contact from '../assets/Group.png'
import star1 from '../assets/satagra.png'
import star2 from '../assets/starpu.png'
import star3 from '../assets/star.png'
import star4 from '../assets/starp.png'

const Footer = () => {
    return ( 
        <div className="relative bg-footer py-5 px-10 lg:px-20  text-white">
            <img className="absolute w-3 h-auto top-[4rem] left-[1rem] lg:left-[3rem]" src={star3}/>
            <img className="absolute w-3 h-auto lg:bottom-[4rem] bottom-[8rem] lg:right-[6rem] right-[3rem]" src={star3}/>
            <img className="absolute w-2 lg:w-3 h-auto lg:bottom-[4rem] bottom-[3rem] lg:right-[50rem] left-[6rem]" src={star1}/>
            <img className="absolute  w-4 lg:w-3 h-auto lg:top-[4rem] lg:left-[50rem] left-[12rem] top-[22rem]" src={star4}/>

            <div className="lg:flex grid gap-10 lg:gap-20 justify-center">
                <div className="lg:w-4/12">
                   <h1 className="font-bold text-[24px] pb-2 text-secondaryText">
                        <span className="text-white">get</span>
                        <span className="text-tetiary">linked</span>
                    </h1>

                    <p className="text-sm">
                       Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology.
                    </p>

                    <div className="flex items-baseline gap-2 text-sm mt-10">
                        <span>Terms of Use</span>
                        <div className="bg-tetiary w-[1px] h-3"></div>
                        <span>Privacy Policy</span>
                    </div>
                </div>      

                <div className="">
                    <div>
                       <h1 className="font-semibold text-tetiary text-lg">Useful links</h1>
                    </div>

                    <div className="grid gap-2">
                        <a>Overview</a>
                        <a>Timeline</a>
                        <a>FAQs</a>
                        <a>Contact</a>
                        <div className="flex gap-5 items-end">
                          <p className="text-tetiary font-semibold">Follow us</p>
                          <img className="w-auto h-5" src={instagram}/>
                          <img className="w-auto h-5" src={x}/>
                          <img className="w-auto h-5" src={facebook}/>
                          <img className="w-auto h-5" src={linkedin}/>
                        </div>
                    </div>
                </div>   

                <div className="">
                    <div>
                       <h1 className="font-semibold text-tetiary text-lg">Contact Us</h1>
                    </div>

                    <div className="grid gap-5">
                        <div className="flex items-center gap-2">
                            <img className="w-auto h-3 " src={contact}/>
                            <p>+234 679 81819</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img className="w-auto h-3" src={location}/>
                            <p>27, Alara street Yaba 100012 Lagos state</p>
                        </div>

                    </div>


                </div>

            </div>

            <p className="text-sm text-center pt-10">All Rights Reserved &copy; getlinked Ltd.</p>

        </div>
     );
}
 
export default Footer;