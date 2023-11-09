import Selected from '../../assets/State=Selected.svg';
import Default from '../../assets/State=Default.svg';
import chair from '../../assets/brandchair.svg'
import phone from '../../assets/brandphone.svg'
import watch from '../../assets/brnadwatch.svg'
import watch2 from '../../assets/brandwatch2.svg'
import hoodie from '../../assets/brandhoodie.svg'
import glasses from '../../assets/brandglasses.svg'
import { useState } from 'react';
import chair2 from '../../assets/featurechair.svg'
import desk from '../../assets/featuredesk.svg'

interface Brand {
    id: number;
    name: string;
    image: string;
    price: number;
}

const Onsale: React.FC = () => {
    const brands: Brand[] = [
        {
            id: 1,
            name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
            image: chair,
            price: 92372.97,
        },
        {
            id: 2,
            name:"TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2",
            image: watch2,
            price: 80020.24,
        },
        {
            id: 3,
            name: 'GUCCI G-Timeless Stainless Steel Bracelet Watch',
            image: watch,
            price: 63073.07,
        },
        {
            id: 4,
            name: 'At&t iPhone 13 Pro 256gb Graphite, Gray',
            image: phone,
            price: 54436.03,
           
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
        {
            id: 7,
            name :"Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2",
            image: desk,
            price: 56536.75,
            
        },
        {
            id: 8,
            name:"Mercer41 Annemargaret 90.5 Round Arm Sofa Polyester Polyester Blend in Blue, Size 34.5 H x 90.5 W x 35.5 D in | Wayfair",
            image: chair2,
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
          <div className="xs:mx-2 grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  gap-2 sm:gap-2  my-8">
              {brands.map((deal) => (
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
      </>

  )
}

export default Onsale