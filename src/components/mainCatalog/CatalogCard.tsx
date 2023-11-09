import React, { useRef, useState } from 'react'
import product2 from '../../assets/Product.svg';
import Selected from '../../assets/State=Selected.svg';
import Default from '../../assets/State=Default.svg';
import phone from '../../assets/phone.svg';
import watch1 from '../../assets/watch1.svg';
import watch2 from '../../assets/watch2.svg';
import hoodie from '../../assets/hoodie.svg';
import glasses from '../../assets/glasses.svg';
import table from '../../assets/table.svg';
import "../../App.css"
import btn from '../../assets/Button (1).svg';

interface Catalog {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

const CatalogCard: React.FC = () => {
  const catalog: Catalog[] = [
    {
      id: 1,
      name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
      image: product2,
      price: 92372.97,
      rating: 4,
      reviews: 123.46,
    },
    {
      id: 2,
      name: 'At&t iPhone 13 Pro 256gb Graphite, Gray',
      image: phone,
      price: 54436.03,
      rating: 2,
      reviews: 123.46,
    },
    {
      id: 3,
      name: 'GUCCI G-Timeless Stainless Steel Bracelet Watch',
      image: watch1,
      price: 63073.07,
      rating: 56,
      reviews: 123.46,
    },
    {
      id: 4,
      name: 'TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2',
      image: watch2,
      price: 80020.24,
      rating: 3,
      reviews: 123.46,
    },
    {
      id: 5,
      name: "Men's Jacquard Pullover Hoodie - Navy / L",
      image: hoodie,
      price: 70977.04,
      rating: 4,
      reviews: 123.46,
    },
    {
      id: 6,
      name: "Persius Aluminum Frame Men's Sunglasses - day night dual",
      image: glasses,
      price: 56536.75,
      rating: 3,
      reviews: 123.46,
    },
    {
      id: 7,
      name: "Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2",
      image: table,
      price: 95434.46,
      rating: 18,
      reviews: 123.46,
    },
    {
      id: 1,
      name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
      image: product2,
      price: 92372.97,
      rating: 67,
      reviews: 123.46,
    },
    {
      id: 2,
      name: 'At&t iPhone 13 Pro 256gb Graphite, Gray',
      image: phone,
      price: 54436.03,
      rating: 28,
      reviews: 123.46,
    },
    {
      id: 3,
      name: 'GUCCI G-Timeless Stainless Steel Bracelet Watch',
      image: watch1,
      price: 63073.07,
      rating: 56,
      reviews: 123.46,
    },
    {
      id: 4,
      name: 'TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2',
      image: watch2,
      price: 80020.24,
      rating: 85,
      reviews: 123.46,
    },
    {
      id: 5,
      name: "Men's Jacquard Pullover Hoodie - Navy / L",
      image: hoodie,
      price: 70977.04,
      rating: 32,
      reviews: 123.46,
    },
    {
      id: 6,
      name: "Persius Aluminum Frame Men's Sunglasses - day night dual",
      image: glasses,
      price: 56536.75,
      rating: 56,
      reviews: 123.46,
    },
    {
      id: 7,
      name: "Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2",
      image: table,
      price: 95434.46,
      rating: 18,
      reviews: 123.46,
    },
    {
      id: 1,
      name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
      image: product2,
      price: 92372.97,
      rating: 67,
      reviews: 123.46,
    },
    {
      id: 2,
      name: 'At&t iPhone 13 Pro 256gb Graphite, Gray',
      image: phone,
      price: 54436.03,
      rating: 28,
      reviews: 123.46,
    },
    {
      id: 3,
      name: 'GUCCI G-Timeless Stainless Steel Bracelet Watch',
      image: watch1,
      price: 63073.07,
      rating: 56,
      reviews: 123.46,
    },
    {
      id: 4,
      name: 'TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2',
      image: watch2,
      price: 80020.24,
      rating: 85,
      reviews: 123.46,
    },
    {
      id: 5,
      name: "Men's Jacquard Pullover Hoodie - Navy / L",
      image: hoodie,
      price: 70977.04,
      rating: 32,
      reviews: 123.46,
    },
    {
      id: 6,
      name: "Persius Aluminum Frame Men's Sunglasses - day night dual",
      image: glasses,
      price: 56536.75,
      rating: 56,
      reviews: 123.46,
    },
    {
      id: 7,
      name: "Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2",
      image: table,
      price: 95434.46,
      rating: 18,
      reviews: 123.46,
    },

    {
      id: 5,
      name: "Men's Jacquard Pullover Hoodie - Navy / L",
      image: hoodie,
      price: 70977.04,
      rating: 32,
      reviews: 123.46,
    },
    {
      id: 6,
      name: "Persius Aluminum Frame Men's Sunglasses - day night dual",
      image: glasses,
      price: 56536.75,
      rating: 56,
      reviews: 123.46,
    },
    {
      id: 7,
      name: "Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2",
      image: table,
      price: 95434.46,
      rating: 18,
      reviews: 123.46,
    },
  ];

  const [selectedItems, setSelectedItems] = useState<Catalog[]>([]);
  const handleImageClick = (deal: Catalog) => {
    const isItemSelected = selectedItems.some((item) => item.id === deal.id);
    if (isItemSelected) {
      setSelectedItems(selectedItems.filter((item) => item.id !== deal.id));
    } else {
      setSelectedItems([...selectedItems, deal]);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null)
  const clearIconRef = useRef<HTMLSpanElement>(null)
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }

    if (clearIconRef.current) {
      clearIconRef.current.classList.add('show')
    }
  }


  return (

      <>
        <div className="flex flex-row mx-4">
        <img src={btn} className="mr-2" />
        <div className="flex flex-col w-full  justify-start items-start flex-grow relative gap-1.5 ">

          <div className="flex w-full  mt-0.5">
            <div className="relative w-full  focus-ring ">
                <span
                    className="absolute inset-y-0 left-4 pr-3 flex items-center cursor-pointer"
                >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                </span>

              <input
                  ref={inputRef}
                  className="put  w-full border border-top-[#d0d5dd] rounded-md py-2 pl-10 pr-3 text-black outline-none "
                  id="inputField"
                  type="text"
                  placeholder="Search ..."
              />
              <span
                  onClick={clearInput}
                  ref={clearIconRef}
                  className="absolute inset-y-0 right-20 pr-3 flex items-center cursor-pointer"
              >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_6191_10963)">
                                        <path
                                            opacity="0.4"
                                            d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6025 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39698 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6025 5.39698 18.3334 9.99935 18.3334Z"
                                            stroke="#667085"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.5 7.5L7.5 12.5M7.5 7.5L12.5 12.5"
                                            stroke="#667085"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6191_10963">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>

            </div>
            <button
                className="absolute mt-0.5 right-0.5 h-10 flex justify-center items-center  flex-shrink-0  overflow-hidden gap-2 px-3.5 py-2 rounded-tr-md rounded-br-md bg-[#870064] border border-[#870064]"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-white">
                Search
              </p>
            </button>
          </div>
        </div>
        </div>

        <div className="grid 2xl:grid-cols-5 xs:grid-cols-2  sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-3 sm:gap-2 mx-4 my-4">
      {catalog.map((deal) => (
          <div className="max-w-[160px] myComponent hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl">
          <div className="flex flex-col justify-between items-center flex-grow-0 flex-shrink-0 h-72 relative overflow-hidden pb-3 rounded-xl bg-white ">
          <div className="self-stretch flex-grow-0 flex-shrink-0 h-40 relative overflow-hidden bg-[#d0d5dd]">
            <div className=" relative m-0 p-0">
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
              <img src={deal.image} alt="Product" className="h-40 w-full   object-cover" />
            </div>

          </div>
          <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 gap-1 px-2">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                <p className="line-clamp-2 text-black font-medium text-sm" style={{ lineHeight: '1.2', maxHeight: '2.4em', overflow: 'hidden' }}>
                  {deal.name}
                </p>
              </div>
              <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#870064]">Kshs.</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#870064]">
                  {deal.price}
                </p>
              </div>
            </div>
              {/*<Rate disabled defaultValue={deal.rating} className="text-sm text-[#FDB022]" />*/}
            <p className="flex-shrink-0 text-xs text-left text-[#667085]">(123.46k reviews)</p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-28 top-0 gap-2 p-2">
          </div>
        </div>
          </div>
      ))}
    </div>

      </>

  );
};

export default CatalogCard;
