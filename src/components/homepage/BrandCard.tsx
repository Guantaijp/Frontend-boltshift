import Selected from '../../assets/State=Selected.svg';
import Default from '../../assets/State=Default.svg';
import chair from '../../assets/brandchair.svg'
import phone from '../../assets/brandphone.svg'
import watch from '../../assets/brnadwatch.svg'
import watch2 from '../../assets/brandwatch2.svg'
import hoodie from '../../assets/brandhoodie.svg'
import glasses from '../../assets/brandglasses.svg'
import { useState } from 'react';

interface Brand {
    id: number;
    name: string;
    image: string;
    price: number;
}

const BrandCard: React.FC = () => {
    const brands: Brand[] = [
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
        {
            id: 5,
            name:"Men's Jacquard Pullover Hoodie - Navy / L",
            image: hoodie,
            price: 70977.04,
        },
        {
            id: 6,
            name:"Persius Aluminum Frame Men's Sunglasses - day night dual",
            image: glasses,
            price: 56536.75,
        },
    ];

    const [selectedItems, setSelectedItems] = useState<Brand[]>([]);

   
    const handleImageClick = (deal: Brand) => {
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
    <div className="sm:mt-2 xs:mt-4 justify-center items-center max-w-[720px]  grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:my-2 sm:grid-cols-1 xs:grid-cols-1 2xs:grid-cols-1  gap-3">
  {brands.map((deal) => (
      <div className="lg:min-w-[300px] max-w-[336px] h-[160px] myComponent hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl">
      <div className="flex w-full flex-row rounded-xl bg-white ">
  <div
      style={{
          height: '154px',
      }}
      className="w-1/2 bg-white rounded-xl ">
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
        <img
            style={{
                objectFit: 'cover',
                width: '100%',
                height: '154px',
            }}
            src={deal.image}
            alt="Product"
            className="rounded-tl-xl rounded-bl-xl"
        />
    </div>
  </div>
  <div className="flex w-1/2 flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0 px-4 pt-8 pb-4">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
           <div className="line-clamp-2 text-black font-medium text-sm" style={{ lineHeight: '1.2', maxHeight: '2.4em', overflow: 'hidden' }}>
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
    <div
      className="myBtn flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"

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

export default BrandCard
