/* eslint-disable no-unused-vars */
import image from '../assets/80465541.png'
import star1 from '../assets/satagra.png'
import star2 from '../assets/starpu.png'
import star3 from '../assets/star.png'
import star4 from '../assets/starp.png'

const Judging = () => {
    return ( 
        <div>
            <div className="lg:flex lg:items-center lg:ml-10 lg:mr-32 py-10">
                <div className="relative lg:pr-10 lg:flex-shrink-0 lg:flex-nowrap lg:mt-20 mt-10">
                    <img className="w-3 lg:w-5 h-auto absolute top-[-4rem] left-[10rem]" src={star1}/>
                    <img className="w-3 lg:w-5 h-auto absolute lg:top-[18rem] lg:left-[24rem] top-[10rem] left-[15rem]" src={star4}/>
                    <img className="lg:h-[80vh] lg:w-auto w-10/12 h-auto block ml-auto mr-auto lg:ml-0 lg:mr-0" src={image} />
                    <img className="w-3 lg:w-5 h-auto absolute lg:bottom-0 right-[2rem] bottom-[-45rem]" src={star3}/>
                </div>

                <div>
                    <h1 className="grid font-bold lg:text-3xl text-xl lg:leading-10 leading-6  pb-3 lg:text-left text-center ">
                        <span>Judging Criteria</span>
                        <span className="text-tetiary">Key attributes</span>
                    </h1>

                    <div className="grid gap-5 text-sm lg:px-0 px-10">
                        <p className="lg:text-left text-center">
                            <span className="text-textColor font-semibold ">Innovation and Creativity: </span>
                                Evaluate the uniqueness and creativity of the
                                solution. Consider whether it addresses a real-world problem in a novel 
                                way or introduces innovative features.
                        </p>

                        <p className="lg:text-left text-center">
                            <span className="text-textColor font-semibold">Functionality: </span>
                            Assess how well the solution works. Does it perform its 
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.
                        </p>

                        <p className="lg:text-left text-center">
                            <span className="text-textColor font-semibold">Impact and Relevance: </span>
                            Determine the potential impact of the solution 
                            in the real world. Does it address a significant problem, and is it relevant 
                            to the target audience? Judges would assess the potential social, 
                            economic, or environmental benefits.
                        </p>

                        <p className="lg:text-left text-center">
                            <span className="text-textColor font-semibold">Technical Complexity: </span>
                            Evaluate the technical sophistication of the solution. 
                            Judges would consider the complexity of the code, the use of advanced 
                            technologies or algorithms, and the scalability of the solution.
                        </p>
                        
                        <p className="lg:text-left text-center">
                            <span className="text-textColor font-semibold">Adherence to Hackathon Rules: </span>
                            Judges will Ensure that the team adhered 
                            to the rules and guidelines of the hackathon, including deadlines, use of 
                            specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                    </div>

                    <button className="block lg:ml-0 lg:mr-0 mr-auto ml-auto text-white font-semibold bg-gradient-to-r from-gradient1 from-0% via-gradient2 via-[56.42%]  to-gradient4 px-10 to-100% py-2 rounded-sm lg:mt-14 mt-10">Read More</button>
                   
                </div>

            </div>
            <div className="bg-white opacity-20 w-screen h-[1px]"></div>
        </div>
     );
}
 
export default Judging;