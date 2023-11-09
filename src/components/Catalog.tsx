
import bag from '../assets/Shopping bags.svg'
import down from '../assets/chevron-down.svg'
import menu from '../assets/menu-03.svg'
import car from '../assets/Catalog/Taxi.svg'
import baby from '../assets/Catalog/Baby.svg'
import beauty from '../assets/Catalog/Beauty.svg'
import health from '../assets/Catalog/Stethoscope.svg'
import home from '../assets/Catalog/Home.svg'
import luggage from '../assets/Catalog/Luggage.svg'
import men from '../assets/Catalog/Men.svg'
import women from '../assets/Catalog/Women.svg'
import pet from '../assets/Catalog/Pet.svg'
import TopFive from './TopFive';
import * as Menubar from '@radix-ui/react-menubar';
interface Category {
  id: number;
  title: string;
  image: string;
  items: string[];
}
const Catalog: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: "Automotive",
      image: car,
      items: [
        "Car Care",
        "Electronics & Accessories",
        "Exterior Accessories",
        "Lights & Lighting Accessories",
        "Interior Accessories",
        "Motorcycle & Powersports",
        "Oils & Fluids",
        "Paint & Paint Supplies",
      ],

    },
    {
      id: 2,
      title: "Baby Products",
      image: baby,
      items: [
        "Activity & Entertainment",
        "Apparel & Accessories",
        "Baby & Toddler",
        "Toys Baby",
        "Care Baby Stationery",
        "Diapering Feeding GiftS",
        "Nursery Potty Training",
        "Pregnancy & Maternity Safety",
      ],
    },
    {
      id: 3,
      title: "Beauty & Personal Care",
      image: beauty,
      items: [
        "Makeup",
        "Skin Care",
        "Hair Care",
        "Fragrance",
        "Foot, Hand & Nail Care",
        "Tools & Accessories",
        "Shave & Hair Removal",
        "Personal Care Oral Care",
      ],
    },
    {
      id: 4,
      title: "Health & Household",
      image: health,
      items: [
        "Baby & Child Care",
        "Health Care",
        "Household Supplies",
        "Medical Supplies & Equipment",
        "Oral Care",
        "Personal Care",
        "Sexual Wellness",
        "Sports Nutrition",
      ],
    },
    {
      id: 5,
      title: "Home & Kitchen",
      image: home,
      items: [
        "Kids' Home Store",
        "Kitchen & Dining",
        "Bedding",
        "Bath",
        "Furniture",
        "Home Décor",
        "Wall Art",
        "Lighting & Ceiling Fans",
      ],
    },
    {
      id: 6,
      title: "Luggage",
      image: luggage,
      items: [
        "Carry-Ons",
        "Backpacks",
        "Garment Bags",
        "Travel Totes",
        "Luggage Sets",
        "Laptop Bags",
        "Suitcases",
        "Kids' Luggage",
      ],
    },
    {
      id: 7,
      title: "Men's Fashion",
      image: men,
      items: [
        "Shorts",
        "Shirts",
        "Activewear",
        "Hoodies & Sweatshirts",
        "Jeans",
        "Pants",
        "Pajamas & Robes",
        "Occupational & Workwear",
      ],
    },
    {
      id: 8,
      title: "Women's Fashion",
      image: women,
      items: [
        "Clothing",
        "Shoes",
        "Jewelry",
        "Watches",
        "Handbags",
        "Accessories",
        "Lingerie",
        "Filter Lable",
      ],
    },
    {
      id: 9,
      title: "Pet Supplies",
      image: pet,
      items: [
        "Dogs",
        "Cats",
        "Fish & Aquatic Pets",
        "Birds",
        "Horses",
        "Reptiles & Amphibians",
        "Small Animals",
        "Filter lable",
      ],
    },

  ];

  return (
    <>
      <Menubar.Root className="m-0 p-0">
        <Menubar.Menu>
          <Menubar.Trigger className="m-0 p-0">
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative"
            >
              <img src={menu} alt="menu" />
              <div className='sm:hidden xs:hidden'>
              <div
                className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative ">
                <div className=" flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black ">Catalog</p>
                </div>
                <img src={down} alt="dropdown" />
              </div>
              </div>
            </div>
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className=" min-w-[320px] xs:w-[330px] max-w-[1248px] bg-white rounded-lg pt-[5px] justify-between shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              sideOffset={10}
              alignOffset={3}
            >
              <div className="px-4 flex justify-start  m-5 ">
                <img src={bag} alt="Category" />
                <p className="p-1 flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">Browse Our Catalog</p>
                <div className='p-1.5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z" fill="black"/>
                </svg>
                </div>
              </div>
              <div className="mx-4 flex  flex-row xs:flex-col md:flex-wrap justify-between items-start min-w-[220px] max-w-[1248px] ">
                <div className=" items-start grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 mb-12 ">
                  {categories.map((category) => (
                    <div key={category.id}
                         className="px-5  flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-1 pr-2 py-2">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                          <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden">
                            <img src={category.image} className="w-8 h-8 absolute left-[-0.52px] top-[-0.52px] object-cover" alt="Category" />
                          </div>
                        </div>
                        <div className="flex justify-start items-center flex-grow h-6 relative gap-1">
                          <p className="flex-grow  text-base font-medium text-left text-[#0c111d]">
                            {category.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="mb-2 justify-start items-center   py-1 ">
                          {category.items.map((item, index) => (
                            <div key={index} className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3 py-1 hover:bg-[#FFF0FB] ">
                              <div className=" text-sm font-medium text-left text-[#475467] hover:text-[#870064] flex justify-start items-center flex-grow-0 flex-shrink-0  h-5 relative gap-1 data-[highlighted]:outline-none data-[highlighted]:bg-[#fff0fb] data-[highlighted]:text-[#870064] select-none data-[disabled]:text-[#870064] focus:bg-[#fff0fb] outline-none rounded-lg self-stretch overflow-hidden px-6 py-2">
                                <p className="justify-start flex-grow text-sm font-medium text-left ">{item}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  ))}
                </div>

                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                {TopFive && <TopFive />}
                </div>
              </div>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </>

  )
}

export default Catalog
