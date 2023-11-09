import shoppingCart from '../../assets/Shopping cart.svg'
import deletebutton from '../../assets/DeleteButton.svg'
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import { useEffect, useState } from 'react'
import rev1 from "../../assets/rev1.png"
import rev2 from "../../assets/rev2.png"
import rev3 from "../../assets/rev3.png"
import rev4 from "../../assets/rev4.png"
import clipboard from '../../assets/Clipboard.svg'
import Footer from '../Footer'
import Navbar from '../Navbar'
import cart from '../../assets/Button.svg'
import SelectVoucher from './SelectVoucher.tsx'

interface shoppingProps {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    quantityInCart: number; // Add this property to track the quantity in the cart
}

const Shopping: React.FC = () => {

    const shoppingItems: shoppingProps[] = [
        {
            id: 1,
            name: 'Contemporary Accent Table Nightstand Drawer Storage Bedside Cabinet - 16  L x 16 W x 18"H Off-White 2 Piece Set Nightstands',
            price: 54438,
            image: rev1,
            quantity: 1,
            quantityInCart: 1,
        },
        {
            id: 2,
            name: 'Flower Moon Spray Perfume',
            price: 38544,
            image: rev2,
            quantity: 1,
            quantityInCart: 1,
        },
        {
            id: 3,
            name: 'TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2',
            price: 37407,
            image: rev3,
            quantity: 1,
            quantityInCart: 1,
        },
        {
            id: 4,
            name: 'Mens Jacquard Pullover Hoodie - Navy/L',
            price: 24434,
            image: rev4,
            quantity: 1,
            quantityInCart: 1,
        },
    ]


    const [shopping, setShopping] = useState(shoppingItems);

    const handleIncrement = (itemId: number) => {
        setShopping((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, quantityInCart: item.quantityInCart + 1 }
                    : item
            )
        );
    };

    const handleDecrement = (itemId: number) => {
        setShopping((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, quantityInCart: Math.max(item.quantityInCart - 1, 1) }
                    : item
            )
        );
    };

    function calculateTotalPrice(item: shoppingProps) {
        return item.price * item.quantityInCart;
    }

    const [, setWindowWidth] = useState(window.innerWidth);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    useEffect(() => {
        // Function to update windowWidth when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Attach the event listener to window resize
        window.addEventListener('resize', handleResize);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <Navbar />
            {/* first part */}
            <div className='mx-4 mt-20 max-w-[1248px]'>

                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-4">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M16.6668 10H3.3335M3.3335 10L8.3335 15M3.3335 10L8.3335 5"
                                stroke="#4D0039"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
                            Continue Shopping
                        </p>
                    </div>
                </div>
                {/* second part */}
                <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[72px] p-4 bg-white">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <img src={shoppingCart} alt="shopping cart" className="flex-grow-0 relative" />
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
                            Shopping Cart
                        </p>
                    </div>
                </div>
                {/* third part */}
                <div className="2xl: xl:flex-wrap  md:flex-wrap md:mx-2 sm:flex-wrap xs:flex-wrap  flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10 px-4 pb-12 bg-white">
                    <div className="flex flex-col justify-start items-start flex-grow gap-2">
                        <div className="lg:hidden md:hidden sm:hidden xs:hidden xl:hidden flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 py-8 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                                <p className="flex-grow w-10 text-lg font-bold text-left text-black">Item</p>
                            </div>
                            <div className="mr-20 flex justify-end items-center flex-grow-0 flex-shrink-0  h-10 gap-">
                                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-32 relative gap-1">
                                    <p className="flex-grow-0 text-start flex-shrink-0 text-lg font-bold  text-black">
                                        Subtotal
                                    </p>
                                </div>
                                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-32 relative gap-1">
                                    <p className="flex-grow-0 flex-shrink-0 ml-10 text-lg font-bold text-center text-black">
                                        Quantity
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* mapping  */}
                        {shopping.map((item) => (
                            <div className="sm:h-[190px] lg:flex-col  xl:flex-col xl:justify-start md:flex-col md:mx-2 sm:flex-wrap sm:mx-2 xs:flex-wrap xs:mx-2 flex justify-between  self-stretch flex-grow-0 flex-shrink-0 h-40 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                                <div className="flex justify-start items-center flex-grow gap-3 sm:gap-2">
                                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-24 w-24 relative overflow-hidden gap-5 rounded-xl bg-white border border-[#eaecf0]">
                                        <img src={item.image} className="self-stretch flex-grow object-contain" />
                                    </div>
                                    <div className="  lg:h-[112px] sm:justify-center flex sm:gap-0 sm:h-24 xs:h-24 flex-col justify-start items-start flex-grow h-24  overflow-hidden gap-2">
                                        <div className="flex  2xl:w-72 xl:64 lg:72  justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                                            <p className="line-clamp-2 flex-grow 2xl:w-72 xl:72 lg:72 md:72 text-sm font-semibold text-left text-black">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="lg:flex-wrap xs:h-[112px] md:flex-row sm:flex-wrap sm:gap-1 items-start  xs:flex-col flex justify-start  self-stretch flex-grow-0 flex-shrink-0 gap-2">
                                            <div className=" flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] px-2  rounded-md bg-white border border-[#eaecf0]">
                                                <p className="xs:mt-0 flex-grow-0 my-0.5 flex-shrink-0 text-xs text-center text-[#475467]">
                                                    Designer Edition
                                                </p>
                                            </div>
                                            <div className="flex mt-0.5 xs:mt-0 justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
                                                    <div className="flex-grow-0 flex-shrink-0 w-5 h-5 relative overflow-hidden rounded-[10px] bg-gradient-to-tr from-[#ff7a00] to-[#ffd439]" />
                                                </div>
                                                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                                                    <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#475467]">
                                                        Sunset Golden Yellow
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="2xl:my-12 mb-1 md:justify-between lg:justify-between  xl:justify-between sm:justify-between  lg:flex-wrap lg:mr-4 md:my-0 flex sm:gap-0  items-center flex-grow-0 flex-shrink-0  h-10 gap-1">
                                    <div className="flex justify-center items-center">
                                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 p-1 rounded-lg">
                                            <img src={deletebutton} alt="minus" className="flex-grow-0 flex-shrink-0 relative" />
                                        </div>
                                        <div className="flex xs:w-[90px]  justify-start items-center flex-grow-0 flex-shrink-0 w-32 sm:w-24 xs:w-18 relative gap-1">
                                            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                                Kshs.
                                            </p>
                                            <p className="flex-grow w-[87px] xs:w-[50px] text-sm font-medium text-left text-black">{calculateTotalPrice(item)}</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-32 sm:w-24  relative overflow-hidden  xs:px-2 px-4 py-2.5 rounded-lg bg-white border border-[#f2f4f7]">
                                            <img onClick={() => handleDecrement(item.id)} src={minus} alt="minus" className="flex-grow-0 flex-shrink-0 relative" />
                                            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#344054]">{item.quantityInCart}</p>
                                            <img onClick={() => handleIncrement(item.id)} src={plus} alt="plus" className="flex-grow-0 flex-shrink-0 relative" />
                                        </div>
                                        <div>
                                            <img  src={cart} alt="button" className="mx-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  max-w-[336px] relative overflow-hidden gap-8 p-6 rounded-xl border border-[#d0d5dd]">
                        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0  py-2">
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                                <img src={clipboard} alt="logo" />
                                <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
                                    Order Summary
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
                            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative py-1">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                    Subtotal
                                </p>
                                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                        Kshs.
                                    </p>
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                        63,073.00
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative py-1">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                    Shipping
                                </p>
                                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                        Kshs.
                                    </p>
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                        80,020.00
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative py-1">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                    Tax
                                </p>
                                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                        Kshs.
                                    </p>
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                        70,977.00
                                    </p>
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                        (14%)
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">

                                {/*  input here */}
                                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054]">Voucher Code</p>

                                     <SelectVoucher />
                                    {/*  input here */}
                            </div>
                            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative py-1">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                    Discount
                                </p>
                                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                        Kshs.
                                    </p>
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                        56,536.00
                                    </p>
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                        (7%)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <svg
                            width={288}
                            height={1}
                            viewBox="0 0 288 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="self-stretch flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <line y1="0.5" x2={288} y2="0.5" stroke="#D0D5DD" stroke-dasharray="4 4" />
                        </svg>
                        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative py-1">
                            <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-[#0c111d]">
                                Total
                            </p>
                            <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                                <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-[#0c111d]">
                                    Kshs.
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#0c111d]">
                                    95,434.00
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#66004b] border border-[#66004b]"
                            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                                Check Out
                            </p>
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M3.33301 10H16.6663M16.6663 10L11.6663 5M16.6663 10L11.6663 15"
                                    stroke="white"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                {/*<div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-10 px-4 py-20 bg-white">*/}
                {/*    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-64 h-64 gap-5 px-6 pt-6 bg-[url(&#x27;content.png&#x27;)]">*/}
                {/*   <img src={shopcart} alt="shopping" className="" />*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">*/}
                {/*        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">*/}
                {/*            <p className="flex-grow-0 flex-shrink-0 w-[352px] text-3xl font-semibold text-center text-[#870064]">*/}
                {/*                Cart's Feeling Light*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <p className="flex-grow-0 flex-shrink-0 max-w-[352px] text-sm text-center text-[#475467]">*/}
                {/*            Your cart is longing for some company. Begin your shopping adventure now!*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*    <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">*/}
                {/*        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]">*/}
                {/*            <svg*/}
                {/*                width="21"*/}
                {/*                height="20"*/}
                {/*                viewBox="0 0 21 20"*/}
                {/*                fill="none"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"*/}
                {/*                preserveAspectRatio="xMidYMid meet"*/}
                {/*            >*/}
                {/*                <path*/}
                {/*                    d="M16.3337 9.99996H4.66699M4.66699 9.99996L10.5003 15.8333M4.66699 9.99996L10.5003 4.16663"*/}
                {/*                    stroke="white"*/}
                {/*                    stroke-width="1.66667"*/}
                {/*                    stroke-linecap="round"*/}
                {/*                    stroke-linejoin="round"*/}
                {/*                ></path>*/}
                {/*            </svg>*/}
                {/*            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">*/}
                {/*                Explore Our Catalog*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Shopping
