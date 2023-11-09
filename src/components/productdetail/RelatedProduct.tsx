import Rp1 from "../../assets/Rp1.png";
import Rp2 from "../../assets/Rp2.png";
import Rp3 from "../../assets/Rp3.png";
import Rp4 from "../../assets/Rp4.png";
import Rp5 from "../../assets/Rp5.png";
import Rp6 from "../../assets/Rp6.png";
import Rp7 from "../../assets/Rp7.png";
import Rp8 from "../../assets/Rp8.png";
import Selected from '../../assets/State=Selected.svg';
import Default from '../../assets/State=Default.svg';
import { useState } from 'react';


interface Related {
    id: number;
    name: string;
    image: string;
    price: number;
    left : number;
}

const RelatedProduct: React.FC = () => {
    const related: Related[] = [
        {
            id: 1,
            name: 'Turin Modern Coffee Tables 14.57"D+17.72"D',
            image: Rp1,
            price: 63284,
            left: 53,
        },
        {
            id: 2,
            name: 'Snuggle Circular Hollow Ceramic Vase - Donuts Vase - Nordic Flower Pot - Home Decoration - Living Room Decoration - Ceramic Vase',
            image: Rp2,
            price: 42372,
            left: 25,
        },
        {
            id: 3,
            name: 'ipad pro 12.9 case 2020 with pencil holder (4th generation), premium protective case cover with soft tpu back and auto sleep/wake feature for 2020/2018 ipad pro 12.9 (sky blue)',
            image: Rp3,
            price: 66073,
            left: 31,
        },
        {
            id: 4,
            name: 'Men Leather Shoes Men Loafers Shoes Mans Flats Shoes Casual Shoes Dress Shoes',
            image: Rp4,
            price: 8020,
            left: 51,
        },
        {
            id: 5,
            name: 'Chain Design Drop Earrings',
            image: Rp5,
            price: 9977,
            left: 67,
        },
        {
            id: 6,
            name: 'Ipree® IP-WB1 500Ml Vacuum Thermos LCD Temperature Display Water Bottle Stainless Steel Double Wall Insulated Cup - Gold',
            image: Rp6,
            price: 42372,
            left: 25,
        },
        {
            id: 7,
            name: 'Zircon Engagement Wedding Rings - Open 2 / United States',
            image: Rp7,
            price: 63284,
            left: 53,
        },
        {
            id: 8,
            name: 'Soft Leather Formal Business Dress Shoe Oxfords - Black / 7.5',
            image: Rp8,
            price: 6073,
            left: 31,
        },
    ];


    const [selectedItems, setSelectedItems] = useState<Related[]>([]);
    const handleImageClick = (deal: Related) => {
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
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10 py-12 bg-white">
  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 bg-white">
    <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
      Related Products
    </p>
  </div> 
          <div className="xs:mx-2 grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  gap-2 sm:gap-2  ">
              {related.map((deal) => (
                  <div className="myComponent hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl">
                      <div className="flex w-full  flex-grow-0 flex-shrink-0  h-32 relative overflow-hidden  rounded-xl bg-white ">
                          <div className="flex-grow-0 flex-shrink-0 w-1/2 h-32 relative overflow-hidden ">
                              <img src={deal.image} alt="Product" className=" h-32 absolute left-[-1px] top-[-1px] object-cover"/>
                              <div className="relative m-0 p-0">
                                  {selectedItems.some((item) => item.id === deal.id) ? (
                                      <img
                                          src={Selected}
                                          alt="Selected"
                                          className="absolute top-2 left-2 h-6 w-6 cursor-pointer"
                                          onClick={() => handleImageClick(deal)}
                                      />
                                  ) : (
                                      <img
                                          src={Default}
                                          alt="Default"
                                          className="absolute top-2 left-2 h-6 w-6 cursor-pointer"
                                          onClick={() => handleImageClick(deal)}
                                      />
                                  )}
                              </div>
                          </div>
                          <div className="w-1/2 flex flex-col justify-between items-start self-stretch flex-grow px-4 py-3">
                              <div className="flex mx-auto flex-col justify-start items-start self-stretch flex-grow gap-1">
                                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                                      <p className="line-clamp-2 text-black font-medium  text-sm" style={{ lineHeight: '1.2', maxHeight: '2.4em', overflow: 'hidden' }}>
                                          {deal.name}
                                      </p>

                                  </div>
                                  <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                                      <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#870064]">Kshs.</p>
                                      <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#870064]">
                                          {deal.price.toLocaleString()}
                                      </p>
                                  </div>
                              </div>
                              <div
                                  className=" myBtn flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"

                              >
                                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                                      Add to Cart
                                  </p>
                              </div>
                          </div>
                          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-0 top-0 gap-2 p-2">
                          </div>
                      </div>
                  </div>
              ))}
          </div>


  </div>
    </>
  )
}

export default RelatedProduct
