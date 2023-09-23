import lhs from '../assets/94868891.png'
import gold from '../assets/gold_medal.png'
import silver from '../assets/silver_medal1.png'
import bronze from '../assets/bronze_medal1.png'

const Prizes = () => {
    return ( 
        <div className="bg-prize bg-footer bg-blend-overlay bg-opacity-90 bg-no-repeat bg-cover w-screen h-fit">
            <div className="lg:flex lg:items-center py-10 lg:px-20">
                <div className="lg:flex-nowrap lg:flex-shrink-0 lg:pr-20">
                    <img className="hidden lg:block h-[60vh] w-auto" src={lhs} />
                </div>

                <div className="">
                    <div className="lg:pl-20">
                        
                    <h1 className="grid font-bold lg:text-3xl text-xl lg:leading-10 leading-6  lg:pb-5 pb-2 lg:text-left text-center">
                        <span>Prizes and</span>
                        <span className="text-tetiary">Rewards</span>
                    </h1>

                    <p className="w-9/12 text-sm lg:text-left text-center lg:ml-0 lg:mr-0 ml-auto mr-auto">
                      Highlight of the prizes or rewards for winners and
                      for participants.
                    </p>
                    </div>

                    <img className="lg:hidden block ml-auto mr-auto w-10/12 h-auto mt-16" src={lhs} />
                    

                    <div className="flex justify-center items-center lg:gap-8 gap-5 mt-32">
                        <div  className="relative bg-tetiary bg-opacity-[12%]  lg:w-4/12 w-3/12 lg:h-56 h-48 rounded-lg border  border-tetiary flex-shrink-0 flex-nowrap">
                            <img className="absolute lg:top-[-6rem] top-[-4rem] z-10" src={silver} />
                            <h1 className="grid leading-none text-center lg:mt-28 mt-24 pb-2">
                                <span className="font-bold lg:text-2xl text-xl">2nd</span>
                                <span className="font-semibold">Runner</span>
                            </h1>

                            <p className="font-bold text-center lg:text-2xl text-xl text-tetiary">N300,000</p>  
                        </div>

                        <div  className="relative bg-tetiary bg-opacity-[12%]  lg:w-4/12 w-3/12 lg:h-64 h-56 rounded-lg border  border-tetiary flex-shrink-0 flex-nowrap">
                            <img className="absolute lg:top-[-6rem] top-[-4rem]  w-[1000px]" src={gold}/>
                            <h1 className="grid leading-none text-center lg:mt-36 mt-32 pb-2">
                                <span className="font-bold lg:text-2xl text-xl">1st</span>
                                <span className="font-semibold">Runner</span>
                            </h1>

                            <p className="font-bold text-center lg:text-2xl text-xl text-secondary">N300,000</p>     
                        </div>

                        <div  className="relative bg-tetiary bg-opacity-[12%]  lg:w-4/12 w-3/12 lg:h-56 h-48 rounded-lg border  border-tetiary flex-shrink-0 flex-nowrap">
                           <img className="absolute lg:top-[-6rem] top-[-4rem] z-10 w-[5/12]" src={bronze}/>
                           <h1 className="grid leading-none text-center lg:mt-28 mt-24 pb-2">
                                <span className="font-bold lg:text-2xl text-xl">3rd</span>
                                <span className="font-semibold">Runner</span>
                            </h1>

                            <p className="font-bold text-center lg:text-2xl text-xl text-tetiary">N300,000</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default Prizes;