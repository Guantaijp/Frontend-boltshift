import truck from '../../assets/Delivery truck.svg';
import Footer from '../Footer';
import Navbar from '../Navbar';
import CheckInput from './CheckInput';

function CheckOut() {
    return (
        <>
        <Navbar />
            <div className="mx-4">
                <div className="">
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
                                    d="M16.6663 10H3.33301M3.33301 10L8.33301 15M3.33301 10L8.33301 5"
                                    stroke="#4D0039"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
                                Shopping Cart
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[72px] p-4 bg-white">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                            <img src={truck} alt="truck" />
                            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
                                Checkout
                            </p>
                        </div>
                    </div>
</div>
            <CheckInput />
            </div>
            <Footer />

        </>
    )
}

export default CheckOut
