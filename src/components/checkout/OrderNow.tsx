import deletebutton from '../../assets/DeleteButton.svg'
import click from '../../assets/Clipboard.svg'
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import { useState } from 'react'
import rev1 from "../../assets/rev1.png"
import rev2 from "../../assets/rev2.png"
import rev3 from "../../assets/rev3.png"
import rev4 from "../../assets/rev4.png"
import SelectVoucher from '../shoppingCart/SelectVoucher.tsx'



interface checkoutProps {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    quantityInCart: number;
}


const OrderNow: React.FC = () => {

    const orderItems: checkoutProps[] = [
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

    const [checking, setChecking] = useState(orderItems)


    const handleIncrement = (itemId: number) => {
        setChecking((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, quantityInCart: item.quantityInCart + 1 }
                    : item
            )
        );
    };

    const handleDecrement = (itemId: number) => {
        setChecking((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, quantityInCart: Math.max(item.quantityInCart - 1, 1) }
                    : item
            )
        );
    };

    function calculateTotalPrice(item: checkoutProps) {
        return item.price * item.quantityInCart;
    }




    return (
        <>
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 min-w-[320px] max-w-[336px]   gap-8 px-5 py-6 ">
               <div className="rounded-xl border border-[#d0d5dd] gap-8 px-5 py-6 ">
                <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-4 py-2">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                        {/* Icon here */}
                        <img src={click} alt="click" className="flex-grow-0 flex-shrink-0 relative" />
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
                            Order Summary
                        </p>
                    </div>
                </div>

                {checking.map((item) => (

                    <div className=" my-4 flex justify-center items-start flex-grow-0 flex-shrink-0 gap-4 py-1 bg-white">
                        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-20 w-20 relative overflow-hidden gap-5 rounded-xl bg-white border border-[#eaecf0]">
                            <img src={item.image} className="self-stretch flex-grow object-cover" />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-32 w-48 gap-2">
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                                <p className=" line-clamp-3 self-stretch flex-grow-0 flex-shrink-0 w-48 text-xs font-medium text-left text-[#475467]">
                                    {item.name}
                                </p>
                            </div>
                            <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-6">
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-2.5 rounded-lg">
                                <img src={deletebutton} alt="minus"/>

                                </div>
                                <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-32 relative overflow-hidden px-4 py-2.5 rounded-lg bg-white border border-[#f2f4f7]">

                                    <img onClick={() => handleDecrement(item.id)} src={minus} alt="minus" className="flex-grow-0 flex-shrink-0 relative" />
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#344054]">{item.quantityInCart}</p>
                                    <img onClick={() => handleIncrement(item.id)} src={plus} alt="plus" className="flex-grow-0 flex-shrink-0 relative" />

                                </div>
                            </div>
                            <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                    Kshs.
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-right text-black">
                                {calculateTotalPrice(item)}
                                </p>
                            </div>
                        </div>
                    </div>

                ))}
                <svg
                    width={296}
                    height={1}
                    viewBox="0 0 296 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-stretch flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <line y1="0.5" x2={296} y2="0.5" stroke="#D0D5DD" stroke-dasharray="4 4" />
                </svg>
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
                                99,233.00
                            </p>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative py-1">
                        <p className=" flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                            Shipping
                        </p>
                        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-1">
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                                Kshs.
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                63,284.00
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
                                97,376.00
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                (14%)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054]">Voucher Code</p>
                        <SelectVoucher />
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
                                83,943.00
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-black">
                                (7%)
                            </p>
                        </div>
                    </div>
                </div>
                <svg
                    width={296}
                    height={1}
                    viewBox="0 0 296 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-stretch flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <line y1="0.5" x2={296} y2="0.5" stroke="#D0D5DD" stroke-dasharray="4 4" />
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
                            120,000.00
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#66004b] border border-[#66004b]"
                    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                        Order Now
                    </p>
                    <svg
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M3.83301 10H17.1663M17.1663 10L12.1663 5M17.1663 10L12.1663 15"
                            stroke="white"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>

               </div>
            </div >
        </>
    )
}

export default OrderNow
