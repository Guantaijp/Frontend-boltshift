import React from 'react'
import Selected from '../assets/State=Selected.svg';
import Default from '../assets/State=Default.svg';
import top1 from '../assets/Catalog/top1.png'
import top2 from '../assets/Catalog/top2.png'
import top3 from '../assets/Catalog/top3.png'
import top4 from '../assets/Catalog/top4.png'
import top5 from '../assets/Catalog/top5.png'
import star from '../assets/Catalog/Star.svg'

interface topFive {
  id: number;
  name: string;
  image: string;
  price: number;

}



const TopFive: React.FC = () => {
  const topFive: topFive[] = [
    {
      id: 1,
      name: "Leather Embossed Patent Toe Tuxedo Shoes - Crimson Garnet / 5.5",
      image: top1,
      price: 54436,
    },
    {
      id: 2,
      name: "Ribbon Lace Up Golden High Heels Stiletto Strappy Party Shoes",
      image: top2,
      price: 63073,
    },
    {
      id: 3,
      name: "Premium Business Summer Set XXL-Army Green",
      image: top3,
      price: 80020,
    },
    {
      id: 4,
      name: "Winter Men Heavy Duty Thermal Heated Warm Work Socks Boots Sport Outdoor",
      image: top4,
      price: 70977,
    },
    {
      id: 5,
      name: "Aspen All-Purpose Big Wine Glasses, Set of 8",
      image: top5,
      price: 56536,
    },
  ];

  const [selectedItems, setSelectedItems] = React.useState<topFive[]>([]);
  const handleImageClick = (deal: topFive) => {
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
      <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0  overflow-hidden gap-3  pt-2 pb-8 ">
        <div className=" flex justify-start items-center flex-grow-0 flex-shrink-0 w-80 gap-1 pl-3  py-2">
          <div className="pl-2 flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
            <img src={star} alt="Star" />
          </div>
          <div className=" flex justify-start items-center flex-grow h-6 relative gap-1">
            <p className=" flex-grow  text-base font-medium text-left text-[#0c111d]">
              Top 5 Products
            </p>
          </div>
        </div>
        {topFive.map((rels) => (
            <div className="min-w-[288px] max-w-[] myComponent hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-72 h-32 relative overflow-hidden gap-3 rounded-xl bg-white ">
            <div className="flex-grow-0 flex-shrink-0 w-32 h-32 relative overflow-hidden ">
              <div className="relative m-0 p-0">
                {selectedItems.some((item) => item.id === rels.id) ? (
                  <img
                    src={Selected}
                    alt="Selected"
                    className="absolute top-2 left-2 h-6 w-6 cursor-pointer"
                    onClick={() => handleImageClick(rels)}
                  />
                ) : (
                  <img
                    src={Default}
                    alt="Default"
                    className="absolute top-2 left-2 h-6 w-6 cursor-pointer"
                    onClick={() => handleImageClick(rels)}
                  />
                )}
                <img src={rels.image} alt="Product" className="w-32 h-32 left-[-1px] top-[-1px] object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-between items-start self-stretch flex-grow px-4 py-3">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                  <p className="line-clamp-2 text-black font-medium w-[116px] text-sm" style={{ lineHeight: '1.2', maxHeight: '2.4em', overflow: 'hidden' }}>
                    {rels.name}
                  </p>
                </div>
                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#870064]">Kshs.</p>
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#870064]">
                    {rels.price}
                  </p>
                </div>
              </div>
              <div
                className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                  Add to Cart
                </p>
              </div>
            </div>
          </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default TopFive
