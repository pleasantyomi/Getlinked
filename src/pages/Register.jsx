/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import image from  '../assets/3d-graphic-designer-showing-thumbs-up-png.png'
import star1 from '../assets/satagra.png'
import star2 from '../assets/starpu.png'
import star3 from '../assets/star.png'
import star5 from '../assets/starp.png'
import { useState, useEffect } from "react";

/* Gets Category from Api */
    const Register = () => {
        const [data, setData] = useState([])
        useEffect(() =>{
            fetch('https://backend.getlinked.ai/hackathon/categories-list?format=json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, []);

    /* State to get the form input data on every change */
    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        team_name: '',
        group_size: 0,
        project_topic: '',
        category: 1,
        privacy_poclicy_accepted: false,
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
        const response = await axios.post('https://backend.getlinked.ai/hackathon/registration', formData, {
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
                <div className="lg:flex lg:items-center  w-screen h-fit lg:py-20 py-10 lg:px-20 px-10">
                    <h1 className="text-xl text-tetiary font-semibold pb-5 lg:hidden block">Register</h1>
                    <div className="relative h-auto w-[50vw] ml-auto mr-auto">
                        <img className="absolute lg:left-[4rem] lg:top-[2rem] right-[-2rem] top-[5rem] w-3 lg:w-5 h-auto" src={star1} />
                        <img className="absolute lg:bottom-[4rem] lg:right-[5rem] right-[-6rem] bottom-[-24rem] w-3 lg:w-5 h-auto" src={star2} />
                        <img className="lg:block hidden absolute bottom-0 left-[7rem] w-5 h-auto" src={star3} />
                        <img className="absolute w-3 h-auto left-[-6rem] bottom-[-8rem]" src={star5}/>
                        <img src={image}/>
                    </div>

                    <div className="relative lg:bg-tetiary lg:bg-opacity-[12%] shadow-sm h-fit  lg:mr-20 lg:w-6/12 py-10 lg:px-14 rounded-lg">
                        <img className="lg:block hidden absolute w-5 h-auto top-[1rem] right-[10rem]" src={star3}/>
                        <h1 className="hidden lg:block text-xl text-tetiary font-semibold pb-5">Register</h1>
                        <p className="pb-2 text-sm">
                            <span>Be a part of this movement</span>
                        </p>

                        <h1 className="text-xl font-semibold uppercase pb-3">Create your account</h1>

                        <form onSubmit={handleSubmit} className="w-full grid gap-4 ">
                            <div className="relative gap-4 lg:flex grid w-full">
                                <div className="grid gap-1 w-full">
                                    <label className="text-xs">Team's name</label>
                                    <input required onChange={handleInput} value={formData.team_name} name="team_name" type="text" placeholder="Enter the name of your group" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-full"/>
                                </div>

                                <div className="grid gap-1 w-full">
                                    <label className="text-xs">Phone</label>
                                    <input required onChange={handleInput} value={formData.phone_number} name='phone_number' type="tel" placeholder="Enter your phone number" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-full"/>
                                </div>
                            </div>

                            <div className="lg:flex grid gap-4 w-full">
                                <div className="grid gap-1 w-full">
                                    <label className="text-xs">Email</label>
                                    <input required onChange={handleInput} value={formData.email} name='email' type="email" placeholder="Enter your email" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-full"/>
                                </div>

                                <div className="grid gap-1 w-full">
                                    <label className="text-xs">Project Topic</label>
                                    <input required onChange={handleInput} value={formData.project_topic} name='project_topic' type="text" placeholder="what is your group project topic" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-full"/>
                                </div>
                            </div>

                            <div className="flex w-full gap-4">
                                <div className="grid gap-1 w-full">
                                    <label className="text-xs">Category</label>
                                    <select required onChange={handleInput} value={formData.category} name='category' placeholder="Enter the name of your team" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-full">
                                        {data.map((list, index) => (
                                            <option key={index} value={list.id}>{list.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid gap-1 w-7/12">
                                    <label required className="text-xs">Group Size</label>
                                    <select onChange={handleInput} value={formData.group_size} name='group_size' placeholder="Enter the name of your team" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-full">
                                        <option>Select</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </select>
                                </div>
                            </div>

                            {/* Success Message shows when the form is successfully submitted */}
                            {
                                showSuccessMessage && (
                                    <div className=''>
                                        <p className=' text-white p-1 bg-tetiary rounded-md'>Registration successful</p>
                                    </div>
                                )
                            }
                            
                        <p className="text-[10px] mt-5 text-tetiary pb-3">Please review your registration details before submitting</p>
                        <div>
                            <div className="flex gap-1 items-center">
                               <input type="checkbox" name='privacy_poclicy_accepted' checked={formData.privacy_policy_accepted} onChange={handleInput} required/>
                               <label className="text-xs">I agreed with the event terms and conditions and privacy policy</label>
                            </div>
                            <button type='submit' className="block lg:w-full mt-5 ml-auto mr-auto text-white font-semibold bg-gradient-to-l from-secondary to-tetiary px-10 py-2 rounded-sm">Register Now</button>
                        </div>
                        </form>

                        <img className="absolute w-2 h-auto bottom-[-0.5rem] right-[6rem]" src={star3}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Register;