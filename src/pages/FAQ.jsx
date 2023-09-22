/* eslint-disable no-unused-vars */
import { useState } from "react";
import image from '../assets/cwok_casual_21 1.png'

const Faq = () => {

    const[accordion, setAccordion] = useState([
        {title: 'Can I work on a project I started before the hackathon?', id: 1},
        {title: 'What happens if I need help during the hackathon?', id: 2},
        {title: 'What happens if I dont have an idea for a project?', id: 3},
        {title: 'Can I join a team or do I have to come with one?', id: 4},
        {title: 'What happens after the hackathon ends', id: 5},
        {title: 'Can I work on a project I started before the hackathon?', id: 6},
    ])

    return ( 
        <div>
            <div className="lg:flex lg:items-center py-10 lg:mx-20">
                <div className=" grid gap-5 lg:px-20 ">
                   <h1 className="grid font-bold leading-10 text-3xl lg:pb-5 lg:text-left text-center">
                        <span>Frequently Ask</span>
                        <span className="text-tetiary">Question</span>
                    </h1>

                    <p className="lg:pb-10 pb-5 lg:text-left text-center px-10 lg:px-0">
                       We got answers to the questions that you might
                       want to ask about getlinked Hackathon 1.0
                    </p>

                    {accordion.map((accordions)=>(
                        <div key={accordions.id} className="lg:px-0 px-10">
                            <div className="flex justify-between items-center text-sm w-full pb-1">
                                <div>
                                    <p>{accordions.title}</p>
                                </div>

                                <div>
                                    <span className="text-tetiary text-lg font-semibold">+</span>
                                </div>
                            </div>

                            <div className="bg-tetiary h-[1px] w-full"></div>
                        
                        </div>
                    ))}
                </div>

                <div className="lg:flex-nowrap lg:flex-shrink-0">
                    <img className="lg:h-[90vh] lg:w-auto w-10/12 h-auto block ml-auto mr-auto lg:ml-0 lg:mr-0 lg:mt-0 mt-10" src={image} />
                </div>

            </div>
            <div className="bg-white opacity-20 w-screen h-[1px]"></div>
        </div>
     );
}
 
export default Faq;