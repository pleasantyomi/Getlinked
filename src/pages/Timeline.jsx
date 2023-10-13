/* eslint-disable no-unused-vars */
import { useState } from "react";

const Timeline = () => {
    const [list, setList] = useState([
        {title: 'Hackathon Announcement', half: 'November 18, 2023', subtitle: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register', number: '1', id: 1},
        {title: 'Hackathon Announcement', half: 'November 18, 2023', subtitle: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register', number: '2', id: 2},
        {title: 'Hackathon Announcement', half: 'November 18, 2023', subtitle: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register', number: '3', id: 3},
        {title: 'Hackathon Announcement', half: 'November 18, 2023', subtitle: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register', number: '4', id: 4},
        {title: 'Hackathon Announcement', half: 'November 18, 2023', subtitle: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register', number: '5', id: 5},
        {title: 'Hackathon Announcement', half: 'November 18, 2023', subtitle: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin     to get ready to register', number: '6', id: 6},
    ])

    const leftDisplay = () =>{
        if (list.number === 1) {
            return list.title , list.subtitle
        }
    }
    return ( 
        <div className="py-10 px-20">
                <div className="relative">
                    {list.map((lists) =>(

                    <div key={lists.id} className="flex justify-center gap-2">
                        <div className="w-4/12 mt-[5rem]">
                            <h1 className="grid text-right">
                                <span className="text-tetiary font-semibold pb-1">{lists.title}</span>
                                <span>{lists.subtitle} </span>
                            </h1>
                        </div>



                        <div className="grid align-middle flex-shrink-0 flex-no-wrap px-10">
                            <div className="bg-tetiary w-1 h-20 ml-auto mr-auto rounded-md"></div>
                            <div className="relative bg-tetiary w-10 h-10 rounded-full block ">
                                <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-semibold">{lists.number}</span>
                            </div>
                        </div>

                        <div className="w-4/12 mt-[8rem]">
                            <p>{lists.half} </p>
                        </div>

                        
                    </div>
                    ))}

                </div>


        </div>
        
     );
}
 
export default Timeline;