import image from '../../assets/Product.svg'
import React, { useState } from 'react'
import Selected from "../../assets/State=Selected.svg";
import Default from "../../assets/State=Default.svg";
interface HeroWebProps {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

const  HeroMobile: React.FC = () => {
    const heroWeb: HeroWebProps[] = [
        {
            id: 1,
            name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
            image: image,
            price: 92372.97,
            description: "This velvet couch is a sophisticated and trendy sofa that focuses on furniture\n" +
                "                                            because of its sumptuous velvet quilted fabric and strong wood legs. Make the living\n" +
                "                                            area feel like a million bucks with this couch because this three-seated couch is\n" +
                "                                            sleek and trendy, converting any living area into a fashionable environment. This\n" +
                "                                            sofa's robust wood construction ensures it will provide years of reliable service.\n" +
                "                                            With its long-lasting support and deep comfort, this couch is the perfect choice for\n" +
                "                                            your home. As for the inside, it's comprised of solid, high-resilience foam, a\n" +
                "                                            substance chosen for its ability to return to its former shape swiftly and with a\n" +
                "                                            nice greeting.",
        },
    ];
    const [selectedItems, setSelectedItems] = useState<HeroWebProps[]>([]);
      const handleImageClick = (deal: HeroWebProps) => {
          const isItemSelected = selectedItems.some((item) => item.id === deal.id);
          if (isItemSelected) {
              setSelectedItems(selectedItems.filter((item) => item.id !== deal.id));
          } else {
              setSelectedItems([...selectedItems, deal]);
          }
      }


    return (
        <>
            <div className=" mx-2 2xl:hidden xl:hidden lg:hidden flex justify-end items-center flex-grow relative overflow-hidden gap-6 rounded-xl bg-gradient-to-tr from-[#e9defa] to-[#fff6eb] border border-[#eaecf0]">
                {heroWeb.map((deal) => (
                <div className="flex flex-col  w-full  justify-start items-center flex-grow-0 flex-shrink-0 h-[592px]">
                    <div className="flex w-full flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[336px]  relative overflow-hidden gap-5 bg-white">
                        <img
                            src={image} className="self-stretch flex-grow object-cover" />
                    </div>
                    <div className='bg-gradient-to-tr from-[#e9defa] to-[#fff6eb] w-full '>
                    <div className="w-50 flex mx-auto flex-col justify-center items-center flex-grow  gap-5 py-6 h-[256px]">
                        <div className="flex flex-col  justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                            <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-3">
                                <div className=" gap-[4px] px-2 py-1 mb-1 rounded-md bg-white border border-indigo-500 ">
                                    <div className="flex-grow-0 flex-shrink-0 relative ">
                                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#1f0217] ">
                                            Opening Sales Discount 50%
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
                                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative overflow-hidden">
                                        <p className="flex-grow-0 flex-shrink-0 w-64 text-2xl font-semibold text-center text-[#870064]">
                                            {deal.name.length > 38 ? `${deal.name.slice(0, 38)}...` : deal.name}
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                                        <p className="flex-grow w-64 text-sm text-left text-[#475467]">
                                            {deal.description.length > 72 ? `${deal.description.slice(0, 72)}...` : deal.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-64 mx-auto flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]">
                                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                                    Shop Now
                                </p>
                                <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M8 15L13 10L8 5"
                                        stroke="white"
                                        stroke-width="1.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                            <div
                                className="flex-grow-0 flex-shrink-0 w-2 h-2 relative overflow-hidden rounded bg-[#4d0039]"
                            ></div>
                            <div
                                className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative overflow-hidden rounded-md bg-[#f2f4f7] mix-blend-multiply"
                            ></div>
                            <div
                                className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative overflow-hidden rounded-md bg-[#f2f4f7] mix-blend-multiply"
                            ></div>
                        </div>
                        {/*<div className="absolute left-72 top-0 gap-2 p-2">*/}
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute right-1 top-0 p-2 ">
                                {selectedItems.some((item) => item.id === deal.id) ? (
                                    <img
                                        style={{
                                            height : '22px',
                                            width : '22px'
                                        }}
                                        src={Selected}
                                        alt="Selected"
                                        className="  cursor-pointer"
                                        onClick={() => handleImageClick(deal)}
                                    />
                                ) : (
                                    <img
                                        style={{
                                            height : '22px',
                                            width : '22px'
                                        }}
                                        src={Default}
                                        alt="Default"
                                        className="cursor-pointer"
                                        onClick={() => handleImageClick(deal)}
                                    />
                                )}</div>
                        {/*</div>*/}
                    </div>
                    </div>


            </div>
                ))}
            </div>
        </>
    )
}
export default HeroMobile

