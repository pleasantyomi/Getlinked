import axios from 'axios';
import facebook from '../assets/vector-2.png'
import x from '../assets/vector-1.png'
import linkedin from '../assets/ri_linkedin-fill.png'
import instagram from '../assets/vector.png'
import { useState, useEffect } from "react";

const Contact = () => {
    /* State to get the form input data on every change */
    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        first_name: '',
        message: 0,
    });

    /* Success message state */
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Initially hidden

    useEffect(() => {
        if (showSuccessMessage) {
        // If the success message is visible, hide it after a delay (e.g., 5 seconds)
        const timer = setTimeout(() => {
            setShowSuccessMessage(false);
        }, 5000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
        }
    }, [showSuccessMessage]);

    /* Funtion that handles change in each input state */
    const handleInput = (event) => {
        // Destructure properties from the event.target
        const { name, value, type, checked } = event.target;
        
        // Check the type of the input element
        if (type === 'checkbox') {
            // If it's a checkbox input, update the state based on whether it's checked or unchecked
            setFormData({
            ...formData,
            [name]: checked, // Update the property with the checkbox state (true or false)
            });
        } else {
            // For other input types (e.g., text, email, etc.), update the state with the input value
            setFormData({
            ...formData,
            [name]: value,
            });
        }
    }

    /* Function to handle the submitting of the form */
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const response = await axios.post('https://backend.getlinked.ai/hackathon/contact-form', formData, {
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        // Handle the response as needed (e.g., show a success message)
        console.log('Response from the server:', response.data);
        
         // Show the success message when there's a response
        setShowSuccessMessage(true);

        } catch (error) {
        console.error('Error:', error);
        // Handle errors as needed (e.g., show an error message)
        }
    };
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

                    <form onSubmit={handleSubmit}>
                        <div className="bg-tetiary bg-opacity-[12%] h-fit w-5/12 mr-20 py-10 px-14 rounded-lg">
                            <h1 className="grid text-xl text-tetiary font-semibold pb-5">
                                <span>Questions or need assistance?</span>
                                <span>Let us know  about it!</span>
                            </h1>

                            <input required onChange={handleInput} value={formData.first_name} name='first_name' type='text' placeholder="First Name" className="bg-transparent outline outline-[1px] outline-white w-full pl-5 py-2 rounded-md mb-5"/>

                            <input required onChange={handleInput} value={formData.email} name='email' type='email' placeholder="Mail" className="bg-transparent outline outline-[1px] outline-white w-full pl-5 py-2 rounded-md mb-5"/>

                            <input required onChange={handleInput} value={formData.phone_number} name='phone_number' type='phone' placeholder="Phone Number" className="bg-transparent outline outline-[1px] outline-white w-full pl-5 py-2 rounded-md mb-5"/>

                            <textarea required onChange={handleInput} value={formData.message} name='message' placeholder="Message" className="bg-transparent outline outline-[1px] outline-white w-full pl-5 py-2 h-28 rounded-md mb-5"/>

                            {/* Success Message shows when the form is successfully submitted */}
                            {
                                showSuccessMessage && (
                                    <div className=''>
                                        <p className=' text-white p-1 bg-tetiary rounded-md'>Registration successful</p>
                                    </div>
                                )
                            }

                            <button type='submit' className="block w-fit text-white font-semibold bg-gradient-to-l from-secondary to-tetiary px-10 py-2 rounded-sm ml-auto mr-auto">Submit</button>
                        </div>
                    </form>
                    

                </div>
            </div>
        
        </div>
     );
}
 
export default Contact;