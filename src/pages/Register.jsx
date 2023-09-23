/* eslint-disable react/no-unescaped-entities */
import image from  '../assets/3d-graphic-designer-showing-thumbs-up-png 1 (1).png'
const Register = () => {
    return ( 
        <div>
            <div>
                <div className="flex items-center  w-screen h-screen px-20">
                    <div className="w-auto h-[80vh]">
                        <img src={image}/>
                    </div>

                    <div className="bg-tetiary bg-opacity-[12%] shadow-sm h-fit w-6/12 mr-20 py-10 px-14 rounded-lg">
                        <h1 className="text-xl text-tetiary font-semibold pb-5">Register</h1>
                        <p className="pb-2 text-sm">
                            <span>Be a part of this movement</span>
                        </p>

                        <h1 className="text-xl font-semibold uppercase pb-3">Create your account</h1>

                        <form className="w-full grid gap-4">
                            <div className="flex justify-between">
                                <div className="grid gap-1">
                                    <label className="text-xs">Team's name</label>
                                    <input type="text" placeholder="Enter the name of your group" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-[12rem]"/>
                                </div>

                                <div className="grid gap-1">
                                    <label className="text-xs">Phone</label>
                                    <input type="tel" placeholder="Enter your phone number" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-[12rem]"/>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="grid gap-1">
                                    <label className="text-xs">Email</label>
                                    <input type="email" placeholder="Enter your email" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-[12rem]"/>
                                </div>

                                <div className="grid gap-1">
                                    <label className="text-xs">Project Topic</label>
                                    <input type="text" placeholder="what is your group project topic" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-[12rem]"/>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="grid gap-1">
                                    <label className="text-xs">Category</label>
                                    <select placeholder="Enter the name of your team" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-[12rem]">
                                        <option>Select your category</option>
                                    </select>
                                </div>

                                <div className="grid gap-1">
                                    <label className="text-xs">Group Size</label>
                                    <select placeholder="Enter the name of your team" className="text-[10px] py-2 pl-2 bg-transparent rounded-sm outline outline-[1px] outline-white w-[12rem]">
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                        </form>

                        <p className="text-[10px] mt-5 text-tetiary pb-3">Please review your registration details before submitting</p>
                        <div className="flex gap-1 items-center">
                            <input type="checkbox"/>
                            <label className="text-xs">I agreed with the event terms and conditions and privacy policy</label>
                        </div>

                        <button className="block w-full mt-5 text-white font-semibold bg-gradient-to-l from-secondary to-tetiary px-10 py-2 rounded-sm">Register Now</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Register;