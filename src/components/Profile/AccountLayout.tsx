
import PopNav from './PopNav';
import user2 from '../../assets/profile/user-01.svg'
import user1 from '../../assets/profile/user-011.svg'
import shield from '../../assets/profile/shield-dollar.svg'
import shield1 from '../../assets/profile/shield-dollar1.svg'
import receipt1 from '../../assets/profile/receipt-check1.svg'
import receipt from '../../assets/profile/receipt-check.svg'
import { Link, useLocation } from 'react-router-dom'
import userPhoto from '../../assets/Avatar.svg'
import {ChangeEvent, useEffect, useState} from 'react';
function AccountLayout({profileData}:any) {

    const location = useLocation();
    const isProfilePage = location.pathname === '/account/profile';
    const isOrderPage = location.pathname === '/account/orders';
    const isPaymentPage = location.pathname === '/account/payment';
    const isvoucherPage = location.pathname === '/account/voucher';

    const [image, setImage] = useState<File | null>(null);
    const handleImageUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImage(event.target.files[0]);
        }
    };

    useEffect(() => {
        if (image) {
            const imageUrl:any = typeof image === 'string' ? image : URL.createObjectURL(image);
            setImage(imageUrl);
        } else if (typeof profileData?.profile_picture === 'string') {
            setImage(null);
        } else if (profileData?.profile_picture instanceof File) {
            const imageUrl:any = URL.createObjectURL(profileData.profile_picture);
            setImage(imageUrl);
        } else {
            setImage(null);
        }
        return () => {
            if (typeof image === 'string') {
                URL.revokeObjectURL(image);
            }
        };
    }, [image, profileData?.profile_picture]);



    return (
        <div className="w-[352px] mx-4 sm:hidden xs:hidden" >
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[336px] overflow-hidden gap-4 pb-8 rounded-xl bg-[#fcfcfd] border border-[#eaecf0]">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 space-y-[-64px]">
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5">
                        <div className="flex-grow-0 flex-shrink-0 w-[336px] h-32 relative overflow-hidden bg-gradient-to-tr from-[#ff9de4] to-[#ffeaf6]" />
                        <PopNav />
                    </div>
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-6">

                        <div className="flex-grow-0 flex-shrink-0 w-24 h-24 relative rounded-[200px]">
                            <div className="relative">
                                {image ? (
                                    <img
                                        src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                                        alt="User Photo"
                                        className="w-24 h-24 absolute left-0 top-0 overflow-hidden rounded-full bg-cover bg-no-repeat bg-center border-4 border-white"
                                    />
                                ) : (
                                    <img
                                    src={userPhoto}
                                    alt="User Photo"
                                    className="w-24 h-24 absolute left-0 top-0 overflow-hidden rounded-full bg-cover bg-no-repeat bg-center border-4 border-white"
                                />
                                )}
                                <div className="flex justify-center items-center absolute left-[66px] top-[66px] gap-2.5 p-2 rounded-2xl bg-white">
                                    <div className="relative">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative cursor-pointer"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M14.6663 7.66659V9.73325C14.6663 11.2267 14.6663 11.9735 14.3757 12.5439C14.12 13.0457 13.7121 13.4536 13.2103 13.7093C12.6399 13.9999 11.8931 13.9999 10.3997 13.9999H5.59967C4.1062 13.9999 3.35946 13.9999 2.78903 13.7093C2.28727 13.4536 1.87932 13.0457 1.62366 12.5439C1.33301 11.9735 1.33301 11.2267 1.33301 9.73325V6.26659C1.33301 4.77311 1.33301 4.02638 1.62366 3.45594C1.87932 2.95418 2.28727 2.54623 2.78903 2.29057C3.35946 1.99992 4.1062 1.99992 5.59968 1.99992H8.33301M12.6663 5.33325V1.33325M10.6663 3.33325H14.6663M10.6663 7.99992C10.6663 9.47268 9.47243 10.6666 7.99968 10.6666C6.52692 10.6666 5.33301 9.47268 5.33301 7.99992C5.33301 6.52716 6.52692 5.33325 7.99968 5.33325C9.47243 5.33325 10.6663 6.52716 10.6663 7.99992Z"
                                                stroke="#0C111D"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="absolute left-0 top-0 opacity-0"
                                                onChange={handleImageUrlChange}
                                            />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-center text-[#101828]">
                                    {profileData?.first_name} {profileData?.last_name}
                                </p>
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-sm text-center text-[#475467]">
                                    {profileData?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                    <Link to='/account/profile'>
                        <div className="hover:text-[#870064] text-black flex justify-start items-center gap-4 pl-3 pr-2 mx-2 py-2 rounded-lg hover:bg-[#ffeaf6] ">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                                {isProfilePage ? (
                                    <img src={user2} alt="user" />
                                ) : (
                                    <img src={user1} alt="user" />
                                )}
                            </div>
                            <div className="flex justify-start items-center flex-grow h-6 relative gap-1">
                                <p className="flex-grow w-[252px] text-base font-medium text-left ">
                                    Personal Info
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/account/orders'>
                        <div
                            className=" p-2  hover:text-[#870064] text-black flex justify-start items-center gap-4 pl-3 pr-2 mx-2 py-2 rounded-lg hover:bg-[#ffeaf6]">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                                {isOrderPage ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M9.06605 1.33288L8.98411 1.33271C8.68161 1.33175 8.30091 1.33055 7.93375 1.4354C7.61581 1.52621 7.31753 1.67535 7.05412 1.87522C6.74994 2.10603 6.52248 2.41131 6.34175 2.65389L6.29272 2.71955L4.33246 5.33317C4.15053 5.57574 4.05956 5.69703 4.02564 5.81369C3.93091 6.13947 4.11316 6.50396 4.43061 6.62364C4.54429 6.6665 4.69775 6.6665 5.00465 6.6665H26.9941C27.301 6.6665 27.4545 6.6665 27.5682 6.62364C27.8856 6.50396 28.0679 6.13947 27.9731 5.8137C27.9392 5.69703 27.8482 5.57574 27.6663 5.33317L25.7061 2.71955L25.657 2.65388C25.4763 2.41132 25.2488 2.10601 24.9447 1.87522C24.6813 1.67535 24.383 1.52621 24.065 1.4354C23.6979 1.33055 23.3172 1.33175 23.0147 1.33271L22.9327 1.33288H9.06605Z" fill="#870064"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3328 11.4665C29.3328 10.7198 29.3328 10.3464 29.1874 10.0612C29.0596 9.8103 28.8556 9.60633 28.6048 9.4785C28.3195 9.33317 27.9462 9.33317 27.1994 9.33317H4.79935C4.05261 9.33317 3.67924 9.33317 3.39403 9.4785C3.14314 9.60633 2.93917 9.8103 2.81134 10.0612C2.66601 10.3464 2.66601 10.7198 2.66602 11.4665L2.66605 25.1176C2.66603 25.8205 2.66601 26.4268 2.70681 26.9263C2.74988 27.4534 2.84497 27.9777 3.10203 28.4822C3.48552 29.2348 4.09744 29.8467 4.85009 30.2302C5.3546 30.4873 5.87889 30.5824 6.40602 30.6255C6.90544 30.6663 7.51178 30.6662 8.21463 30.6662L23.7841 30.6662C24.487 30.6662 25.0933 30.6663 25.5928 30.6255C26.1199 30.5824 26.6442 30.4873 27.1487 30.2302C27.9013 29.8467 28.5133 29.2348 28.8967 28.4822C29.1538 27.9777 29.2489 27.4534 29.292 26.9263C29.3328 26.4268 29.3327 25.8205 29.3327 25.1176L29.3328 11.4665ZM10.666 13.3332C11.4024 13.3332 11.9994 13.9301 11.9994 14.6665C11.9994 15.7274 12.4208 16.7448 13.171 17.4949C13.9211 18.2451 14.9385 18.6665 15.9994 18.6665C17.0602 18.6665 18.0777 18.2451 18.8278 17.4949C19.578 16.7448 19.9994 15.7274 19.9994 14.6665C19.9994 13.9301 20.5963 13.3332 21.3327 13.3332C22.0691 13.3332 22.666 13.9301 22.666 14.6665C22.666 16.4346 21.9637 18.1303 20.7134 19.3805C19.4632 20.6308 17.7675 21.3332 15.9994 21.3332C14.2313 21.3332 12.5356 20.6308 11.2853 19.3805C10.0351 18.1303 9.33271 16.4346 9.33271 14.6665C9.33271 13.9301 9.92967 13.3332 10.666 13.3332Z" fill="#870064"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M7.36 3.51984L5.28 6.29317C4.86802 6.84247 4.66203 7.11713 4.66681 7.34703C4.67097 7.54709 4.76478 7.7347 4.92233 7.85807C5.10339 7.99983 5.4467 7.99983 6.13333 7.99983H25.8667C26.5533 7.99983 26.8966 7.99983 27.0777 7.85807C27.2352 7.7347 27.329 7.54709 27.3332 7.34703C27.338 7.11713 27.132 6.84247 26.72 6.29317L24.64 3.51984M7.36 3.51984C7.59467 3.20695 7.712 3.05051 7.8607 2.93767C7.9924 2.83774 8.14154 2.76317 8.30051 2.71776C8.48 2.6665 8.67556 2.6665 9.06667 2.6665H22.9333C23.3244 2.6665 23.52 2.6665 23.6995 2.71776C23.8585 2.76317 24.0076 2.83774 24.1393 2.93767C24.288 3.05051 24.4053 3.20695 24.64 3.51984M7.36 3.51984L4.85333 6.86206C4.53672 7.28421 4.37841 7.49529 4.266 7.72773C4.16625 7.934 4.09349 8.15225 4.04954 8.37711C4 8.63052 4 8.89437 4 9.42206L4 25.0665C4 26.56 4 27.3067 4.29065 27.8771C4.54631 28.3789 4.95426 28.7869 5.45603 29.0425C6.02646 29.3332 6.77319 29.3332 8.26667 29.3332L23.7333 29.3332C25.2268 29.3332 25.9735 29.3332 26.544 29.0425C27.0457 28.7869 27.4537 28.3789 27.7094 27.8771C28 27.3067 28 26.56 28 25.0665V9.42206C28 8.89437 28 8.63052 27.9505 8.37712C27.9065 8.15226 27.8338 7.934 27.734 7.72774C27.6216 7.49529 27.4633 7.28421 27.1467 6.86206L24.64 3.51984M21.3333 13.3332C21.3333 14.7477 20.7714 16.1042 19.7712 17.1044C18.771 18.1046 17.4145 18.6665 16 18.6665C14.5855 18.6665 13.229 18.1046 12.2288 17.1044C11.2286 16.1042 10.6667 14.7477 10.6667 13.3332" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                )}
                            </div>
                            <div className="flex justify-start items-center flex-grow h-6 relative gap-1">
                                <p className="flex-grow w-[252px] text-base font-medium text-left ">Orders</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/account/payment'>
                        <div
                            className=" p-2  hover:text-[#870064] text-black flex justify-start items-center gap-4 pl-3 pr-2 mx-2 py-2 rounded-lg hover:bg-[#ffeaf6] ">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                                {isPaymentPage ? (
                                    <img src={shield1} alt="shield" />
                                ) : (
                                    <img src={shield} alt="shield" />
                                )}
                            </div>
                            <div className="flex justify-start items-center flex-grow h-6 relative gap-1">
                                <p className="flex-grow w-[252px] text-base font-medium text-left">
                                    Payment
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/account/voucher'>
                        <div
                            className="p-2 hover:text-[#870064] text-black flex justify-start items-center gap-4 pl-3 pr-2 mx-2 py-2 rounded-lg hover:bg-[#ffeaf6]  ">
                            {isvoucherPage ? (
                                <img src={receipt1} alt="receipt" />
                            ) : (
                                <img src={receipt} alt="receipt" />
                            )}
                            <div className="flex justify-start items-center flex-grow h-6 relative gap-1 rounded-lg">
                                <p className="flex-grow w-[252px] text-base font-medium text-left rounded-lg ">
                                    Vouchers
                                </p>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div >
    );
}

export default AccountLayout;
