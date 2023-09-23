import image1 from '../assets/lock.png'
import image2 from '../assets/081.png'
import icon from '../assets/listterms.png'

const Privacy = () => {
    return ( 
        <div>
            <div className="lg:px-20 py-10 lg:mb-32 mb-40">
                <div className="lg:flex">
                    <div className="lg:px-20 ">
                       <h1 className="grid font-bold leading-10 text-3xl pb-1lg:text-left text-center">
                           <span>Privacy Policy and </span>
                           <span className="text-tetiary">Terms</span>
                       </h1>

                       <p className="text-sm pb-5 lg:text-left text-center">Last updated on September 12, 2023</p>

                       <p className="text-sm pb-5 lg:text-left text-center lg:px-0 px-10">Below are our privacy & policy, which outline a lot of goodies. 
                        it’s our aim to always take of our participant</p>

                        <div className="bg-tetiary bg-opacity-[12%] lg:w-fit w-10/12 ml-auto mr-auto lg:ml-0 lg:mr-0  h-fit p-10 border border-tetiary mb-5">
                            <p className="text-sm lg:text-left text-center">At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose, 
                                and safeguard your data when you participate in our tech 
                                hackathon event. By participating in our event, you consent 
                                to the practices described in this policy.
                            </p>

                            <p className="text-tetiary font-semibold pt-3">Licensing Policy</p>
                            <p className="text-sm pb-5">Here are terms of our Standard License:</p>
                            <div className="pb-5 flex gap-3 items-center">
                                <img src={icon}/>
                                <p className="text-sm">The Standard License grants you a non-exclusive right to
                                   navigate and register for our event
                                </p>
                            </div>

                            <div className="pb-5 flex items-center gap-3">
                                <img src={icon}/>
                                <p className="text-sm">You are licensed to use the item available at any free source
                                   sites, for your project developement
                                </p>
                            </div>

                            <button className="ml-auto mr-auto block w-fit text-white font-semibold bg-gradient-to-l from-secondary to-tetiary px-10 py-2 rounded-sm mt-3">Read More</button>

                        </div>
                    </div>

                    <div className="relative flex-nowrap flex-shrink-0 px-20">
                        <img className="lg:h-[70vh] lg:w-auto w-10/12 h-auto ml-auto mr-auto" src={image1}/>
                        <img className="absolute lg:top-[12rem] top-[4.5rem] right-[6rem] lg:h-[70vh] lg:w-auto w-8/12 h-auto ml-auto mr-auto" src={image2}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Privacy;