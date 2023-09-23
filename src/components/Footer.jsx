import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import linkedin from '../assets/ri_linkedin-fill.png'
import instagram from '../assets/vector.png'
import location from '../assets/vector(2).png'
import contact from '../assets/Group.png'

const Footer = () => {
    return ( 
        <div className="bg-footer w-screen h-fit py-5 lg:px-20 px-10 text-white">
            <div className="lg:flex grid gap-10 lg:gap-0 justify-between">
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

                        <div className="flex items-center gap-2 w-5/12">
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