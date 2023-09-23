import facebook from '../assets/vector-2.png'
import x from '../assets/vector-1.png'
import linkedin from '../assets/ri_linkedin-fill.png'
import instagram from '../assets/vector.png'

const Contact = () => {
    return ( 
        <div>
            <div>
                <div className="flex items-center justify-between w-screen h-screen px-20 text-sm">
                    <div className="px-20 pl-20">
                        <h1 className="font-bold text-tetiary text-2xl pb-8 ">Get in touch</h1>
                        <p className="grid leading-none pb-5">
                            <span>Contact</span>
                            <span>Information</span>
                        </p>
                        <p className="grid leading-none pb-5">
                            <span>27,Alara Street</span>
                            <span>Yaba 100012</span>
                            <span>Lagos State</span>
                        </p>
                        <p className="pb-5">Call Us : 07067981819</p>
                        <p className="grid leading-none pb-5">
                            <span>we are open from Monday-Friday</span>
                            <span>08:00am - 05:00pm</span>
                        </p>
                        <p className="font-semibold text-lg text-tetiary mb-2">Share on</p>
                        <div className="flex items-center gap-5">
                            <img className="w-auto h-5" src={instagram} />
                            <img className="w-auto h-5" src={x}/>
                            <img className="w-auto h-5" src={facebook}/>
                            <img className="w-auto h-5"src={linkedin}/>

                        </div>
                    </div>

                    <div className="bg-tetiary bg-opacity-[12%] h-fit w-5/12 mr-20 py-10 px-14 rounded-lg">
                        <h1 className="grid text-xl text-tetiary font-semibold pb-5">
                            <span>Questions or need assistance?</span>
                            <span>Let us know  about it!</span>
                        </h1>

                        <input placeholder="First Name" className="bg-transparent outline outline-[1px] outline-white w-full pl-5 py-2 rounded-md mb-5"/>

                        <input placeholder="Mail" className="bg-transparent outline outline-[1px] outline-white w-full pl-5 py-2 rounded-md mb-5"/>

                        <textarea placeholder="Message" className="bg-transparent outline outline-[1px] outline-white w-full pl-5 py-2 h-28 rounded-md mb-5"/>

                        <button className="block w-fit text-white font-semibold bg-gradient-to-l from-secondary to-tetiary px-10 py-2 rounded-sm ml-auto mr-auto">Submit</button>
                    </div>

                </div>
            </div>
        
        </div>
     );
}
 
export default Contact;