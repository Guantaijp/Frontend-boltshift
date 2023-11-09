import "../../App.css"
import google from "../../assets/sigup/Social button.svg"
import facebook from "../../assets/sigup/Social button groups (1).svg"
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'
import apple from "../../assets/sigup/Social button groups.svg"
import  { useState } from 'react'
import {Checkbox} from "../../../@/components/ui/checkbox.tsx";

function Signup() {

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
                <div className=" w-1/2 signup h-screen flex flex-col rounded-3xl py-3 sm:hidden md:hidden xs:hidden 2xs:hidden ">
                    <div className="flex mt-auto flex-col justify-center items-center  p-20 bg-gradient-to-b from-black/0 to-black/40">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8 p-10 rounded-3xl bg-black/30 border-2 border-white/50 backdrop-blur-xl">
                            <p className="self-stretch flex-grow-0 flex-shrink-0  text-3xl font-semibold text-left text-white">
                                “Exceptional tracking and communication makes planning around our busy schedules a breeze.”
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                    <p className="flex-grow w-[572px] text-4xl font-semibold text-left text-white">
                                        Marion &amp; Paul Mbingu
                                    </p>
                                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="none"
                                        >
                                            <g clip-path="url(#clip0_5342_15220)">
                                                <path
                                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                    fill="#F2F4F7"
                                                />
                                                <g clip-path="url(#clip1_5342_15220)">
                                                    <path
                                                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                        fill="#FAC515"
                                                    />
                                                </g>
                                            </g>
                                           
                                        </svg>
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="none"
                                        >
                                            <g clip-path="url(#clip0_5342_15224)">
                                                <path
                                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                    fill="#F2F4F7"
                                                />
                                                <g clip-path="url(#clip1_5342_15224)">
                                                    <path
                                                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                        fill="#FAC515"
                                                    />
                                                </g>
                                            </g>
                                          
                                        </svg>
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="none"
                                        >
                                            <g clip-path="url(#clip0_5342_15228)">
                                                <path
                                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                    fill="#F2F4F7"
                                                />
                                                <g clip-path="url(#clip1_5342_15228)">
                                                    <path
                                                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                        fill="#FAC515"
                                                    />
                                                </g>
                                            </g>
                                            
                                        </svg>
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="none"
                                        >
                                            <g clip-path="url(#clip0_5342_15232)">
                                                <path
                                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                    fill="#F2F4F7"
                                                />
                                                <g clip-path="url(#clip1_5342_15232)">
                                                    <path
                                                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                        fill="#FAC515"
                                                    />
                                                </g>
                                            </g>
                                         
                                        </svg>
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="none"
                                        >
                                            <g clip-path="url(#clip0_5342_15236)">
                                                <path
                                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                    fill="#F2F4F7"
                                                />
                                                <g clip-path="url(#clip1_5342_15236)">
                                                    <path
                                                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                                        fill="#FAC515"
                                                    />
                                                </g>
                                            </g>
                                          
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 ">
                                    <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                                        <p className="self-stretch flex-grow-0 flex-shrink-0  text-lg font-semibold text-left text-white">
                                            Couples
                                        </p>
                                        <p className="self-stretch flex-grow-0 flex-shrink-0  text-base font-medium text-left text-white">
                                            Weekly Shoppers
                                        </p>
                                    </div>
                                    <div className="flex justify-start gap-8">
                                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-14 h-14 relative gap-3 rounded-[28px] border border-white/50">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <path
                                                    d="M19 12H5M5 12L12 19M5 12L12 5"
                                                    stroke="white"
                                                    stroke-width={2}
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-14 h-14 relative gap-3 rounded-[28px] border border-white/50">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <path
                                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                                    stroke="white"
                                                    stroke-width={2}
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
   
   </div>
  
                {/* second */}
                <div className=" flex flex-col justify-center items-center self-stretch flex-grow sm:mx-4 xs:mx-4 2xl:mx-4 mx-auto">
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-16 px-8 mx-auto">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 ">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                <svg
                                    width="217"
                                    height="62"
                                    viewBox="0 0 217 62"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0 w-[216.46px] h-[61.12px] relative"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M28.0027 59.0122C43.4735 59.0122 56.0151 46.4706 56.0151 30.9997C56.0151 15.5289 43.4735 2.9873 28.0027 2.9873C12.5318 2.9873 -0.00976562 15.5289 -0.00976562 30.9997C-0.00976562 46.4706 12.5318 59.0122 28.0027 59.0122ZM36.7416 16.0367C37.1669 14.5257 35.7006 13.6322 34.3615 14.5863L15.6675 27.9038C14.2152 28.9384 14.4437 30.9997 16.0107 30.9997H20.9333V30.9616H30.5273L22.71 33.7199L19.2638 45.9628C18.8384 47.4738 20.3046 48.3673 21.6439 47.4132L40.3378 34.0958C41.7901 33.0611 41.5615 30.9997 39.9947 30.9997H32.5296L36.7416 16.0367Z"
                                        fill="url(#paint0_linear_12435_1443)"
                                    ></path>
                                    <path
                                        d="M70.5059 43.6172V39.1861H74.0201V21.3091H70.5059V16.878H84.2574C85.8872 16.878 87.3006 17.1582 88.4975 17.7184C89.7198 18.2532 90.6621 19.0299 91.3242 20.0485C92.0118 21.0417 92.3556 22.2386 92.3556 23.6392V24.0212C92.3556 25.2436 92.1264 26.2495 91.668 27.0389C91.2096 27.8029 90.6621 28.4013 90.0254 28.8343C89.4142 29.2417 88.8285 29.5346 88.2683 29.7128V30.4004C88.8285 30.5532 89.4397 30.8461 90.1018 31.279C90.7639 31.6864 91.3242 32.2849 91.7826 33.0743C92.2664 33.8638 92.5084 34.8951 92.5084 36.1684V36.5504C92.5084 38.0274 92.1646 39.3007 91.477 40.3703C90.7894 41.4144 89.8344 42.2166 88.6121 42.7768C87.4152 43.3371 86.0146 43.6172 84.4102 43.6172H70.5059ZM79.0624 39.0333H83.799C84.8941 39.0333 85.7726 38.7659 86.4347 38.2312C87.1223 37.6964 87.4661 36.9324 87.4661 35.9392V35.5572C87.4661 34.5641 87.1351 33.8001 86.4729 33.2653C85.8108 32.7305 84.9195 32.4631 83.799 32.4631H79.0624V39.0333ZM79.0624 27.8793H83.7226C84.7667 27.8793 85.6198 27.6119 86.2819 27.0771C86.9695 26.5423 87.3133 25.8038 87.3133 24.8616V24.4796C87.3133 23.5119 86.9823 22.7734 86.3201 22.2641C85.658 21.7293 84.7922 21.4619 83.7226 21.4619H79.0624V27.8793Z"
                                        fill="#870064"
                                    ></path>
                                    <path
                                        d="M103.894 44.152C102.009 44.152 100.316 43.77 98.8135 43.006C97.311 42.242 96.1269 41.1343 95.261 39.6827C94.3952 38.2312 93.9623 36.4867 93.9623 34.4495V33.8383C93.9623 31.801 94.3952 30.0566 95.261 28.6051C96.1269 27.1535 97.311 26.0458 98.8135 25.2818C100.316 24.5178 102.009 24.1358 103.894 24.1358C105.778 24.1358 107.472 24.5178 108.974 25.2818C110.477 26.0458 111.661 27.1535 112.527 28.6051C113.393 30.0566 113.826 31.801 113.826 33.8383V34.4495C113.826 36.4867 113.393 38.2312 112.527 39.6827C111.661 41.1343 110.477 42.242 108.974 43.006C107.472 43.77 105.778 44.152 103.894 44.152ZM103.894 39.8737C105.371 39.8737 106.593 39.4026 107.561 38.4604C108.529 37.4927 109.013 36.1175 109.013 34.3349V33.9529C109.013 32.1703 108.529 30.8079 107.561 29.8656C106.619 28.8979 105.396 28.4141 103.894 28.4141C102.417 28.4141 101.195 28.8979 100.227 29.8656C99.2592 30.8079 98.7753 32.1703 98.7753 33.9529V34.3349C98.7753 36.1175 99.2592 37.4927 100.227 38.4604C101.195 39.4026 102.417 39.8737 103.894 39.8737Z"
                                        fill="#870064"
                                    ></path>
                                    <path d="M116.358 43.6172V16.878H121.171V43.6172H116.358Z" fill="#870064"></path>
                                    <path
                                        d="M131.853 43.6172C130.605 43.6172 129.586 43.2352 128.797 42.4712C128.033 41.6818 127.651 40.6377 127.651 39.3389V28.6433H122.914V24.6706H127.651V18.788H132.464V24.6706H137.659V28.6433H132.464V38.4986C132.464 39.2625 132.82 39.6445 133.534 39.6445H137.201V43.6172H131.853Z"
                                        fill="#870064"
                                    ></path>
                                    <path
                                        d="M147.975 44.152C145.505 44.152 143.48 43.6172 141.901 42.5476C140.322 41.4781 139.367 39.9501 139.036 37.9638L143.467 36.8178C143.646 37.7091 143.938 38.4094 144.346 38.9187C144.779 39.4281 145.301 39.7973 145.912 40.0265C146.549 40.2302 147.236 40.3321 147.975 40.3321C149.095 40.3321 149.923 40.1411 150.458 39.7591C150.992 39.3517 151.26 38.8551 151.26 38.2694C151.26 37.6836 151.005 37.238 150.496 36.9324C149.987 36.6013 149.172 36.334 148.051 36.1302L146.982 35.9392C145.657 35.6846 144.448 35.3408 143.353 34.9079C142.258 34.4495 141.379 33.8256 140.717 33.0361C140.055 32.2467 139.724 31.2281 139.724 29.9802C139.724 28.0958 140.411 26.6569 141.787 25.6638C143.162 24.6451 144.97 24.1358 147.211 24.1358C149.324 24.1358 151.082 24.6069 152.482 25.5492C153.883 26.4914 154.8 27.7265 155.233 29.2544L150.763 30.6296C150.56 29.6619 150.139 28.9743 149.503 28.5669C148.892 28.1594 148.128 27.9557 147.211 27.9557C146.294 27.9557 145.594 28.1212 145.11 28.4523C144.626 28.7579 144.384 29.1908 144.384 29.751C144.384 30.3622 144.639 30.8206 145.148 31.1262C145.657 31.4063 146.345 31.6228 147.211 31.7756L148.28 31.9666C149.706 32.2212 150.992 32.565 152.138 32.9979C153.31 33.4054 154.227 34.0038 154.889 34.7933C155.576 35.5572 155.92 36.6013 155.92 37.9256C155.92 39.9119 155.194 41.4526 153.743 42.5476C152.317 43.6172 150.394 44.152 147.975 44.152Z"
                                        fill="#870064"
                                    ></path>
                                    <path
                                        d="M158.228 43.6172V16.878H163.041V27.0007H163.728C163.932 26.5933 164.251 26.1858 164.683 25.7784C165.116 25.3709 165.689 25.0398 166.402 24.7852C167.141 24.5051 168.07 24.365 169.191 24.365C170.668 24.365 171.954 24.7088 173.049 25.3964C174.169 26.0585 175.035 26.988 175.646 28.1849C176.258 29.3563 176.563 30.7315 176.563 32.3103V43.6172H171.75V32.6923C171.75 31.2663 171.394 30.1967 170.681 29.4836C169.993 28.7706 169 28.4141 167.701 28.4141C166.224 28.4141 165.078 28.9107 164.263 29.9038C163.448 30.8715 163.041 32.234 163.041 33.9911V43.6172H158.228Z"
                                        fill="#870064"
                                    ></path>
                                    <path
                                        d="M179.856 43.6172V24.6706H184.669V43.6172H179.856ZM182.263 22.4551C181.397 22.4551 180.659 22.1749 180.047 21.6147C179.462 21.0544 179.169 20.3159 179.169 19.3992C179.169 18.4824 179.462 17.7439 180.047 17.1836C180.659 16.6234 181.397 16.3433 182.263 16.3433C183.154 16.3433 183.893 16.6234 184.478 17.1836C185.064 17.7439 185.357 18.4824 185.357 19.3992C185.357 20.3159 185.064 21.0544 184.478 21.6147C183.893 22.1749 183.154 22.4551 182.263 22.4551Z"
                                        fill="#870064"
                                    ></path>
                                    <path
                                        d="M191.225 43.6172V28.6433H186.412V24.6706H191.225V21.1563C191.225 19.8575 191.607 18.8262 192.371 18.0622C193.161 17.2728 194.179 16.878 195.427 16.878H200.393V20.8507H197.108C196.395 20.8507 196.038 21.2327 196.038 21.9967V24.6706H201.004V28.6433H196.038V43.6172H191.225Z"
                                        fill="#870064"
                                    ></path>
                                    <path
                                        d="M209.705 43.6172C208.457 43.6172 207.439 43.2352 206.649 42.4712C205.885 41.6818 205.503 40.6377 205.503 39.3389V28.6433H200.767V24.6706H205.503V18.788H210.316V24.6706H215.511V28.6433H210.316V38.4986C210.316 39.2625 210.673 39.6445 211.386 39.6445H215.053V43.6172H209.705Z"
                                        fill="#870064"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_12435_1443"
                                            x1="-0.00976562"
                                            y1="2.9873"
                                            x2="56.0151"
                                            y2="59.0122"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#F093FB"></stop>
                                            <stop offset="1" stop-color="#F5576C"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div
                                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-[10.186338424682617px] py-[2.5465846061706543px] rounded-[12731.65px] bg-gray-50 border-[1.27px] border-[#eaecf0]"
                                >
                                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#344054]">β1</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-96 gap-8 ">
                            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-96 text-3xl font-semibold text-center text-[#101828]">
                                    Create an account
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-96 text-base text-center text-[#475467]">
                                    Join other million shoppers in the country.
                                </p>
                            </div>
                            <div className="2xl:w-[386px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[326px] flex flex-col mx-auto items-center self-stretch flex-grow-0 flex-shrink-0 gap-6 rounded-xl">
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">

                                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
                                        <div className="flex flex-col w-full justify-start items-start flex-grow relative gap-1.5">
                                            <label className="flex-grow-0  flex-shrink-0 text-xs font-medium text-left text-[#344054]">First Name</label>
                                            <input
                                                className="put appearance-none w-full  border border-[#d0d5dd] rounded-md py-2 px-3 text-black  focus:outline-none "
                                                id="inputField"
                                                type="text"
                                                placeholder="Enter your First Name"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full justify-start items-start flex-grow relative gap-1.5">
                                            <label className="flex-grow-0  flex-shrink-0 text-xs font-medium text-left text-[#344054]">Last Name</label>
                                            <input
                                                className="put appearance-none w-full  border border-[#d0d5dd] rounded-md py-2 px-3 text-black  focus:outline-none "
                                                id="inputField"
                                                type="text"
                                                placeholder="Enter your Last Name"
                                            />
                                        </div>

                                        <div className="flex flex-col w-full justify-start items-start flex-grow relative gap-1.5">
                                            <label className="flex-grow-0  flex-shrink-0 text-xs font-medium text-left text-[#344054]">Email</label>
                                            <input
                                                className="put appearance-none w-full  border border-[#d0d5dd] rounded-md py-2 px-3 text-black  focus:outline-none "
                                                id="inputField"
                                                type="email"
                                                placeholder="Enter your Email Address"
                                            />
                                        </div>

                                        <div className="flex flex-col w-full justify-start items-start flex-grow relative gap-1.5">
                                            <label className="flex-grow-0  flex-shrink-0 text-xs font-medium text-left text-[#344054]">Phone Number</label>
                                            <input
                                                className="put appearance-none w-full  border border-[#d0d5dd] rounded-md py-2 px-3 text-black  focus:outline-none "
                                                id="inputField"
                                                type="text"
                                                placeholder="Enter your Phone Number"
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

                                    <div>
                                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative pt-0.5">
                                            <Checkbox
                                                // checked={row.isSelected}
                                                // onCheckedChange={(value) => row.toggleSelected()}
                                                aria-label="Select row"
                                                className="border rounded-md  border-[#D0D5DD] data-[state=checked]:bg-[#66004B] data-[state=checked]:border-[#66004B]"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                                            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                                                I have read and agree with
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-5 relative overflow-hidden gap-2">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4d0039]">
                                            Terms and Conditions and Privacy Policy
                                        </p>
                                    </div>
                                    </div>
                                </div>



                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                                    <div
                                        className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]"
                                        style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                                    >
                                        <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                                            Get Started
                                        </p>
                                    </div>
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                        <div className="flex-grow h-px bg-[#eaecf0]" />
                                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                            Or Sign Up with
                                        </p>
                                        <div className="flex-grow h-px bg-[#eaecf0]" />
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
                                </div>
                            </div>
                            <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#475467]">
                                    Already have an account?
                                </p>
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4d0039]">
                                        Log in
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

export default Signup
