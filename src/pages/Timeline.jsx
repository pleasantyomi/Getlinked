/* eslint-disable no-unused-vars */
import { useState } from "react";

const Timeline = () => {
    const [list, setList] = useState([
        {title: 'Hackathon Announcement', half: 'November 18, 2023', subtitle: 'he getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register', number: '1', id: 1},
        {title: '',subtitle: '', half: '', number: '2', id: 2},
        {number: '3', id: 3},
        {number: '4', id: 4},
        {number: '5', id: 5},
        {number: '6', id: 6},

    ])
    return ( 
        <div>
            <div className="flex justify-between">
                <div>
                    <h1></h1>
                    <p>
                    </p>

                </div>

                <div>

                </div>

                <div>

                </div>

            </div>
        </div>
        
     );
}
 
export default Timeline;