import OrderNow from "./OrderNow"
import { useState } from 'react'
import social from '../../assets/checkout/Social button.svg'
import social2 from '../../assets/checkout/Social button (1).svg'
import social3 from '../../assets/checkout/Social button (2).svg'
import social4 from '../../assets/checkout/Social button (3).svg'
import bicycle from '../../assets/checkout/Bicycle.svg'
import truck from '../../assets/checkout/Delivery truck.svg'
import rocket from '../../assets/checkout/Rocket.svg'
import TextInput from '../reusablecomponents/TextInput.tsx'
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'

interface Shipping {
    id: number;
    name: string;
    image: string;
    period: string;
}
function CheckInput() {
    const shipping: Shipping[] = [
        {
            id: 1,
            name: 'Free Shipping KSh 0',
            image: bicycle,
            period: '5-7 Days Delivery',
        },
        {
            id: 2,
            name: 'Standard Shipping KSh 500',
            image: truck,
            period: '3-5 Days Delivery',
        },
        {
            id: 3,
            name: 'Express Shipping KSh 1000',
            image: rocket,
            period: '1-2 Days Delivery',
        }
        ];

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");

    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);

    const [confirmType, setConfirmType] = useState("password");
    const [confirmIcon, setConfirmIcon] = useState(eyeOff);


    const handleToggleConfirm = () => {
        if (confirmType === "password") {
            setConfirmIcon(eye);
            setConfirmType("text");
        } else {
            setConfirmIcon(eyeOff);
            setConfirmType("password");
        }
    };

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
            <div className=" flex bg-white  gap-5 justify-between sm:flex-wrap xs:flex-wrap mx-4">
                <div>
                    <div className=" my-4 flex justify-start items-center relative gap-4">
                        <div className="flex flex-col justify-center items-center        h-8 w-8 relative overflow-hidden gap-2.5 rounded-[128px] bg-[#870064]">
                            <p className=" text-lg font-semibold text-center text-white">
                                1
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-left text-black">
                            Personal Details
                        </p>
                    </div>
                    <div className="flex justify-center items-start  gap-10 py-2 bg-white">
                        <div className="my-4  flex flex-col justify-center items-start flex-grow relative gap-4">
                            <p className=" text-sm font-semibold text-center text-black">
                                Sign in with:
                            </p>
                            <div className="grid grid-cols-2 2xl:flex xl:flex  gap-2">
                                <img src={social} alt="social" />
                                <img src={social2} alt="social" />
                                <img src={social3} alt="social" />
                                <img src={social4} alt="social" />
                            </div>
                        </div>
                    </div>

                    <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-wrap sm:flex-col md:flex-col py-4  gap-4 ">
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                            <TextInput label="First Name" placeholder="First Name" type="text" />
                        </div>
                        <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                           <TextInput label="Last Name" placeholder="Last Name" type="text" />
                        </div>
                    </div>
                    <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-wrap sm:flex-col md:flex-col py-4  gap-4 ">
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                           <TextInput label="Email Address" placeholder="Email Address" type="email" />
                        </div>
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                          <TextInput label="Phone Number" placeholder="Phone Number" type="number" />
                        </div>
                    </div>

                    <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-wrap sm:flex-col md:flex-col py-4  gap-4 ">
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-left text-[#344054]">Enter Password</label>
                            <div className="relative w-full">
                                <input
                                    className="put appearance-none w-full border border-[#d0d5dd] rounded-md py-2 px-3 text-black pr-8 focus:outline-none"
                                    type={type}
                                    name="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                                <span className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" onClick={handleToggle}>
                                       <img src={icon} alt="icon" />
                                    </span>
                            </div>
                        </div>
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-left text-[#344054]">Confirm Password</label>
                            <div className="relative w-full">
                                <input
                                    className="put appearance-none w-full border border-[#d0d5dd] rounded-md py-2 px-3 text-black pr-8 focus:outline-none"
                                    type={confirmType}
                                    name="Confirm Password"
                                    placeholder=" Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    autoComplete="current-password"
                                />
                                <span className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" onClick={handleToggleConfirm}>
                                        <img src={confirmIcon} alt="icon" />
                                    </span>
                            </div>
                        </div>
                    </div>



                    <svg
                        width={86}
                        height={1}
                        viewBox="0 0 864 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="self-stretch       "
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <line y1="0.5" x2={864} y2="0.5" stroke="#D0D5DD" stroke-dasharray="4 4" />
                    </svg>
                    {/*<div className="flex flex-col justify-start items-start self-stretch gap-8 py-4">*/}
                    <div className=" py-8 flex justify-start items-center py-4 relative gap-4">
                        <div className=" flex flex-col justify-center items-center        h-8 w-8 relative overflow-hidden gap-2.5 rounded-[128px] bg-[#870064]">
                            <p className="text-lg font-semibold text-center text-white">
                                2
                            </p>
                        </div>
                        <p className=" text-lg font-semibold text-left text-black">
                            Shipping Details
                        </p>
                    </div>

                    <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-wrap sm:flex-col md:flex-col py-4 gap-4 ">
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                            <TextInput  label="Apartment Details" placeholder="Apartment Details" type="text" />
                        </div>
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                         <TextInput label="Street Address" placeholder="Street Address" type="text" />
                         </div>
                    </div>

                    <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-wrap sm:flex-col md:flex-col py-4 gap-4 ">
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5 ">
                          <TextInput label="Country" placeholder="Country" type="text" />
                        </div>
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                            <TextInput label="City/Town" placeholder="City/Town" type="text" />
                        </div>
                    </div>

                    <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-wrap sm:flex-col md:flex-col  py-4  gap-4 ">
                        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
                           <TextInput label="Apartment Details" placeholder="Apartment Details" type="text" />
                        </div>
                    </div>
                        <div className="flex py-8 justify-start items-center        relative gap-4">
                            <div className="flex flex-col justify-center items-center        h-8 w-8 relative overflow-hidden gap-2.5 rounded-[128px] bg-[#870064]">
                                <p className=" text-lg font-semibold text-center text-white">
                                    3
                                </p>
                            </div>
                            <p className=" text-lg font-semibold text-left text-black">
                                Shipping Method
                            </p>
                        </div>

                    <div className="flex flex-wrap gap-5">
                        {shipping.map((ship) => (
                            <label
                                key={ship.id}
                                className="max-w-[416px] flex hover:bg-[#FFE0F7] justify-start items-center flex-grow overflow-hidden gap-1 px-4 py-6 rounded-lg bg-white border border-[#eaecf0] hover:border-[#E67FCA]"
                            >
                                <div className="flex justify-start items-center flex-grow relative gap-4">
                                    <img src={ship.image} alt={ship.name} />
                                    <div className="flex flex-col justify-start items-start flex-grow">
                                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                                            <p className=" hover:text-[#870064] flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#0c111d]">
                                                {ship.name}
                                            </p>
                                        </div>
                                        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                                            <p className="hover:text-[#C644A3] flex-grow-0 flex-shrink-0 text-sm text-left text-[#667085]">
                                                {ship.period}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    style={{
                                        accentColor: '#870064',
                                        width: '20px',
                                        height: '20px',
                                    }}
                                    type="radio"
                                    name="shippingOption" // Make sure all radio buttons have the same name
                                    className="border rounded-full hover:border-[#870064] outline-none"
                                    value={ship.id.toString()}
                                    id={`shippingOption_${ship.id}`}
                                />
                            </label>
                        ))}
                    </div>

                    <div className="py-8  flex justify-start items-center relative gap-4">
                        <div className="flex flex-col justify-center items-center        h-8 w-8 relative overflow-hidden gap-2.5 rounded-[128px] bg-[#870064]">
                            <p className=" text-lg font-semibold text-center text-white">
                                4
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-left text-black">
                            Payment Method
                        </p>
                    </div>
                </div>
                <OrderNow />
            </div>
        </>
    )
}

export default CheckInput
