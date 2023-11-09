import chair from '../assets/chairTrend.svg'
import phone from '../assets/phoneTrend.svg'
import watch from '../assets/watchTrend.svg'
import watch2 from '../assets/watchTrend2.svg'
import Selected from '../assets/State=Selected.svg';
import Default from '../assets/State=Default.svg';
import { useState } from 'react';


interface Trend {
    id: number;
    name: string;
    image: string;
    price: number;
  
}

const TrendingCard: React.FC = () => {
    const trends: Trend[] = [
        {
            id: 1,
            name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
            image: chair,
            price: 92372.97,
        },
        {
            id: 2,
            name: 'At&t iPhone 13 Pro 256gb Graphite, Gray',
            image: phone,
            price: 54436.03,
        },
        {
            id: 3,
            name: 'GUCCI G-Timeless Stainless Steel Bracelet Watch',
            image: watch,
            price: 63073.07,
        },
        {
            id: 4,
            name:"TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2",
            image: watch2,
            price: 80020.24,
        },
    ]
    const [selectedItems, setSelectedItems] = useState<Trend[]>([]);

   
  const handleImageClick = (deal: Trend) => {
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


    <div className="justify-center items-center grid 2xl:grid-cols-4 xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 2xs:grid-cols-1  gap-2 my-8">
    {trends.map((deal) => (
        <div className="myComponent hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-[2px]  hover:rounded-2xl border border-[#eaecf0] rounded-xl">
        <div className=" flex flex-col justify-between items-center flex-grow-0 flex-shrink-0 relative overflow-hidden pb-3 rounded-xl bg-white ">
  <div className="self-stretch flex-grow-0 flex-shrink-0 h-60 relative overflow-hidden ">
    <div className="relative m-0 p-0">
        {selectedItems.some((item) => item.id === deal.id) ? (
          <img
            src={Selected}
            alt="Selected"
            className="absolute top-2 right-2 h-6 w-6 cursor-pointer"
            onClick={() => handleImageClick(deal)}
          />
        ) : (
          <img
            src={Default}
            alt="Default"
            className="absolute top-2 right-2 h-6 w-6 cursor-pointer"
            onClick={() => handleImageClick(deal)}
          />
        )}
        <img src={deal.image} alt="Product" className="rounded-tl-md w-full h-72 rounded-tr-md sm:h-60  object-cover" />
      </div>
  </div>
  <div className="flex flex-col justify-end items-center self-stretch flex-grow-0 flex-shrink-0 h-[136px] gap-5 px-3">
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
      <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">

         <p className="line-clamp-2 text-black font-medium text-sm text-center" style={{ lineHeight: '1.2', maxHeight: '2.4em', overflow: 'hidden' }}>
             {deal.name}
           </p>
      </div>
      <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#870064]">Kshs.</p>
        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-[#870064]">
        {deal.price}
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
      <div
        className="myBtn flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
          Add to Cart
        </p>
      </div>
    </div>
  </div>
  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-60 top-0 gap-2 p-2">
    
  </div>
</div>
        </div>
  ))}
</div>
</>
  )
}

export default TrendingCard
