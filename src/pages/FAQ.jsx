/* eslint-disable no-unused-vars */
import { useState } from "react";
import image from '../assets/cwok_casual.png'
import question from '../assets/question.png'
import star1 from '../assets/satagra.png'
import star2 from '../assets/starpu.png'
import star3 from '../assets/star.png'
import star4 from '../assets/starp.png'

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
            <div className="lg:flex lg:items-center pb-10 pt-20 lg:mx-20">
                <div className="relative grid gap-5 lg:px-20 ">
                    <img className="w-3 lg:w-5 h-auto absolute top-[-1rem] lg:left-[3rem] left-[5rem]" src={star1}/>
                   <h1 className="grid font-bold lg:text-3xl text-xl lg:leading-10 leading-6  lg:pb-5 lg:text-left text-center">
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

                <div className="relative lg:flex-nowrap lg:flex-shrink-0 lg:pt-0 pt-10">
                    <img className="absolute lg:left-[6rem] left-[4rem] lg:top-0 top-[3.5rem] lg:w-auto lg:h-auto w-8" src={question}/>
                    <img className="absolute left-[15rem] lg:top-[-4rem] top-[3.5rem] lg:w-auto lg:h-auto w-8" src={question}/>
                    <img className="w-3 lg:w-5 h-auto absolute lg:left-[20rem] left-[13rem] top-[4rem] lg:top-[-2rem]" src={star1}/>
                    <img className="absolute lg:right-[13rem] right-[14rem] lg:top-[-1.2rem] top-[1.7rem]" src={question}/>
                    <img className="w-3 lg:w-5 h-auto absolute lg:top-[8rem] top-[12rem] lg:left-[8rem] left-[6rem]" src={star1}/>
                    <img className="w-3 lg:w-5 h-auto absolute lg:top-[20rem] top-[16rem] left-[1.5rem] lg:left-[1rem]" src={star4}/>
                    <img className="lg:h-[90vh] lg:w-auto w-10/12 h-auto block ml-auto mr-auto lg:ml-0 lg:mr-0 lg:mt-0 mt-10" src={image} />
                    <img className="w-3 lg:w-5 h-auto absolute bottom-0 right-[7rem]" src={star3}/>
                </div>

            </div>
            <div className="bg-white opacity-20 w-screen h-[1px]"></div>
        </div>
     );
}
 
export default Faq;