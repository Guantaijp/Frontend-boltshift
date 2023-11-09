import torch from '../../assets/torch.png';
import tab from '../../assets/tab.png';
import ring from '../../assets/ring.png';
import shoe1 from '../../assets/shoe1.png';
import shoe2 from '../../assets/shoe2.png';
import shoe3 from '../../assets/shoe3.png';
import shoe4 from '../../assets/shoe4.png';
import fire2 from '../../assets/1F525_Fire_v13_Still 1.svg';
import Selected from '../../assets/State=Selected.svg';
import Default from '../../assets/State=Default.svg';

import React, { useState } from 'react';
import { Link } from 'react-router-dom'

interface Similar {
  id: number;
  name: string;
  image: string;
  price: number;
  left: number;
}


const Similar: React.FC = () => {
  const similars: Similar[] = [
    {
      id: 1,
      name: 'Ipree® IP-WB1 500Ml Vacuum Thermos LCD Temperature Display Water Bottle Stainless Steel Double Wall Insulated Cup - Gold',
      image: torch,
      price: 120000,
      left: 57,
    },
    {
      id: 2,
      name: 'ipad pro 12.9 case 2020 with pencil holder (4th generation), premium protective case cover with soft tpu back and auto sleep/wake feature for 2020/2018 ipad pro 12.9 (sky blue)',
      image: tab,
      price: 61844,
      left: 62,
    },
    {
      id: 3,
      name: 'Zircon Engagement Wedding Rings - Open 2 / United States',
      image: ring,
      price: 44618,
      left: 90,
    },
    {
      id: 4,
      name: 'Men Leather Shoes Men Loafers Shoes Mans Flats Shoes Casual Shoes Dress Shoes',
      image: shoe1,
      price: 70721,
      left: 34,
    },
    {
      id: 5,
      name: 'Soft Leather Formal Business Dress Shoe Oxfords - Black / 7.5',
      image: shoe2,
      price: 92372,
      left: 14,
    },
    {
      id: 6,
      name: 'Leather Embossed Patent Toe Tuxedo Shoes - Crimson Garnet / 5.5',
      image: shoe3,
      price: 54436,
      left: 86,
    },
    {
      id: 7,
      name: 'Ribbon Lace Up Golden High Heels Stiletto Strappy Party Shoes',
      image: shoe4,
      price: 63073,
      left: 44,
    },
  ];

  const [selectedItems, setSelectedItems] = useState<Similar[]>([]);
  const handleImageClick = (deal: Similar) => {
    const isItemSelected = selectedItems.some((item) => item.id === deal.id);
    if (isItemSelected) {
      // Item is already selected, remove it from the selection
      setSelectedItems(selectedItems.filter((item) => item.id !== deal.id));
    } else {
      // Item is not selected, add it to the selection
      setSelectedItems([...selectedItems, deal]);
    }
  };


  return (
    <>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10 py-6 bg-white">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 bg-white">
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
            You may also like
          </p>
        </div>

        <div
            style={{
              maxWidth: '1248px',
            }}
            className="gap-4 justify-center items-center grid 2xl:grid-cols-7 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 sm:gap-3 xs:grid-cols-2 xs:gap-3 2xs:grid-cols-1 my-4">
          {similars.map((deal) => (
              <Link to='/detail'>
                <div className= " myComponent max-w-[160px] min-w-[135px]  hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl">
                  <div className=" flex flex-col justify-between items-center  rounded-xl flex-grow-0 flex-shrink-0 h-72 relative overflow-hidden pb-3 bg-white">
                    <div className="self-stretch flex-grow-0 rounded-tr-xl rounded-tl-xl flex-shrink-0 h-40 relative overflow-hidden bg-[#d0d5dd]">

                      <div className=" relative m-0 p-0">
                        {selectedItems.some((item) => item.id === deal.id) ? (
                            <img
                                src={Selected}
                                alt="Selected"
                                className="absolute top-2 right-2  cursor-pointer"
                                onClick={() => handleImageClick(deal)}
                            />
                        ) : (
                            <img
                                src={Default}
                                alt="Default"
                                className="absolute top-2 right-2 cursor-pointer"
                                onClick={() => handleImageClick(deal)}
                            />
                        )}
                        <img src={deal.image} alt="Product" className="h-40 w-full rounded-tr-xl rounded-tl-xl left-[-1px] top-[-1px] object-cover" />
                      </div>

                    </div>
                    <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 gap-1 px-3">
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden">
                          <div className="line-clamp-1 flex-grow text-xs font-medium text-left text-black">
                            {deal.name}
                          </div>

                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#870064]">Kshs.</p>
                          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#870064]">
                            {deal.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
                        <div className="flex justify-start items-start flex-grow relative overflow-hidden rounded-lg bg-[#ffb8ec]">
                          <div className="bg-[#870064] h-1 rounded-full" style={{ width: `${deal.left}%` }}></div>
                        </div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
                          <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative overflow-hidden">
                            <img
                                src={fire2}
                                className="w-4 h-4 absolute left-[-0.52px] top-[-0.52px] object-cover"
                            />
                          </div>
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#870064]">{deal.left}</p>
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#870064]"> Left</p>
                        </div>
                      </div>

                      <Link to='/checkout'
                            className="myBtn flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                          // style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                      >
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                          Add to Cart
                        </p>
                      </Link>

                    </div>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-28 top-0 gap-2 p-2">
                      <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                          preserveAspectRatio="none"
                      >
                        <g filter="url(#filter0_b_2633_36297)">
                          <g filter="url(#filter1_b_2633_36297)">
                            <rect width={32} height={32} rx={16} fill="#F9FAFB" />
                            <path
                                d="M18.7409 10C21.0891 10 22.6668 12.235 22.6668 14.32C22.6668 18.5425 16.1187 22 16.0002 22C15.8816 22 9.3335 18.5425 9.3335 14.32C9.3335 12.235 10.9113 10 13.2594 10C14.6076 10 15.4891 10.6825 16.0002 11.2825C16.5113 10.6825 17.3928 10 18.7409 10Z"
                                stroke="#66004B"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                              id="filter0_b_2633_36297"
                              x={-40}
                              y={-40}
                              width={112}
                              height={112}
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                          >

                          </filter>
                          <filter
                              id="filter1_b_2633_36297"
                              x={-40}
                              y={-40}
                              width={112}
                              height={112}
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                          >

                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Similar
