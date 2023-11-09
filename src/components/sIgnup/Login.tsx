import "../../App.css"
import google from "../../assets/sigup/Social button.svg"
import facebook from "../../assets/sigup/Social button groups (1).svg"
import apple from "../../assets/sigup/Social button groups.svg"
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'
import { useState } from 'react'
import logo from "../../assets/sigup/Brand Logo.svg"
import avatar from "../../assets/sigup/Avatar.png"
import avatar1 from "../../assets/sigup/Avatar (1).png"
import avatar2 from "../../assets/sigup/Avatar (2).png"
import avatar3 from "../../assets/sigup/Avatar (3).png"
import avatar4 from "../../assets/sigup/Avatar (4).png"
import row from "../../assets/sigup/Row.svg"


function Login() {


    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

  return (
 <>
            <div className="flex  w-full h-screen  justify-between my-6">

                {/* first */}
                <div className="  w-1/2 login h-screen rounded-3xl flex flex-col  py-3 sm:hidden md:hidden xs:hidden 2xs:hidden ">
                    <div className="mt-auto rounded-3xl justify-end items-center p-16"
                        style={{
                            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #870064 59.37%)"
                        }}
                    >
                        <div className=" flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-12">
                            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                                <p className="self-stretch flex-grow-0 flex-shrink-0  text-6xl font-semibold text-left text-white">
                                    🌟 Embark on a Brand Odyssey in Our Exquisite Catalog! 🛍️
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0  text-lg font-medium text-left text-white">
                                    Sign in or create a free account and get access to an unmatched online shopping
                                    experience. Get started in seconds, no bank card required.
                                </p>
                            </div>
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
                                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 space-x-[-12px]">
                                        {/* <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-10 w-10 relative rounded-[200px] bg-[#dcd3cb] border-[1.5px] border-white">
                                            <div className="self-stretch flex-grow w-10 h-10 relative opacity-[0.08] overflow-hidden rounded-[200px] border-[0.75px] border-[#101828]" />
                                        </div> */}
                                        <img src={avatar} alt="" className="h-10 w-10 rounded-[200px] border-1 border-white" />

                                        <img src={avatar1} alt="" className="h-10 w-10 rounded-[200px] border-1 border-white" />

                                        <img src={avatar2} alt="" className="h-10 w-10 rounded-[200px] border-1 border-white" />
                                        <img src={avatar3} alt="" className="h-10 w-10 rounded-[200px] border-1 border-white" />
                                        <img src={avatar4} alt="" className="h-10 w-10 rounded-[200px] border-1 border-white" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                       <img  src={row} alt="" />
                                    </div>
                                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                                        from Million+ shoppers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* second */}


                <div className="flex flex-col justify-center items-center self-stretch flex-grow mx-auto p-4 sm:p-0">
                    <div className="flex flex-col justify-center items-center gap-8 w-full max-w-md">
                        <div className="flex flex-col justify-start items-center self-stretch gap-6 w-full">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                                <p className="self-stretch flex-grow-0 flex-shrink-0  text-3xl font-semibold text-center text-[#101828]">
                                    Welcome back
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-center text-[#667085]">
                                    Please enter your details.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center self-stretch gap-6 rounded-xl w-full">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
                                <div className="flex flex-col w-full justify-start items-start flex-grow relative gap-1.5">
                                    <label className="flex-grow-0  flex-shrink-0 text-xs font-medium text-left text-[#344054]">Email</label>
                                    <input
                                        className="put appearance-none w-full  border border-[#d0d5dd] rounded-md py-2 px-3 text-black  focus:outline-none "
                                        id="inputField"
                                        type="email"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="flex flex-col w-full justify-start items-start flex-grow relative gap-1.5">
                                    <label className="flex-grow-0  flex-shrink-0 text-xs font-medium text-left text-[#344054]">Password</label>
                                    <div className="relative w-full">
                                        <input
                                            className="put appearance-none w-full border border-[#d0d5dd] rounded-md py-2 px-3 text-black pr-8 focus:outline-none"
                                            type={type}
                                            name="confirm"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete="current-password"
                                        />
                                        <span className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" onClick={handleToggle}>
                                             <img src={icon} alt="icon" />
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
                                <div className="flex justify-start items-start flex-grow gap-2">
                                    <Checkbox.Root
                                        className="mr-1  flex h-[20px] w-[20px] border border-[#870064] items-center justify-center  bg-white   rounded-md hover:text-[#870064] outline-none "
                                        defaultChecked

                                    >
                                        <Checkbox.Indicator className="">
                                            <CheckIcon />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <div className="flex flex-col justify-start items-start flex-grow relative">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                                            Remember for 30 days
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4d0039]">
                                        Forgot password
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                                <div
                                    className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]"
                                    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                                >
                                    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                                        Sign in
                                    </p>
                                </div>
                                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                                    <div className="flex justify-center items-center flex-grow gap-3">
                                        < img src={apple} alt="google" />
                                    </div>
                                    <div className="flex justify-center items-center flex-grow gap-3">
                                        < img src={google} alt="google" />
                                    </div>
                                    <div className="flex justify-center items-center flex-grow gap-3">
                                        < img src={facebook} alt="google" />
                                    </div>
                                </div>

                                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#475467]">
                                        Don't have an account?{" "}
                                        <span className="text-[#66004b] cursor-pointer">Sign up</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Login
