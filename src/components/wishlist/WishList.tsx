import heart from '../../assets/Heartwithribbon.svg'
import deletebutton from '../../assets/DeleteButton.svg'
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import {  useState } from 'react'
import rev1 from "../../assets/rev1.png"
import rev2 from "../../assets/rev2.png"
import rev3 from "../../assets/rev3.png"
import rev4 from "../../assets/rev4.png"
import Footer from '../Footer'
import Navbar from '../Navbar'
import cart from '../../assets/Button.svg'
import wishlist from '../../assets/wishlist.svg'
import { Link } from 'react-router-dom'

interface wishlistProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  quantityInCart: number;
}

const WishList: React.FC = () => {

  const wishItems: wishlistProps[] = [
    {
      id: 1,
      name: 'Contemporary Accent Table Nightstand Drawer Storage Bedside Cabinet - 16  L x 16 W x 18"H Off-White 2 Piece Set Nightstands',
      price: 54438,
      image: rev1,
      quantity: 1,
      quantityInCart: 1,
    },
    {
      id: 2,
      name: 'Flower Moon Spray Perfume',
      price: 38544,
      image: rev2,
      quantity: 1,
      quantityInCart: 1,
    },
    {
      id: 3,
      name: 'TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2',
      price: 37407,
      image: rev3,
      quantity: 1,
      quantityInCart: 1,
    },
    {
      id: 4,
      name: 'Mens Jacquard Pullover Hoodie - Navy/L',
      price: 24434,
      image: rev4,
      quantity: 1,
      quantityInCart: 1,
    },
  ]

  const [wishing, setWishing] = useState(wishItems)

  const handleIncrement = (itemId: number) => {
    setWishing((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantityInCart: item.quantityInCart + 1 }
          : item
      )
    );
  };

  const handleDecrement = (itemId: number) => {
    setWishing((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantityInCart: Math.max(item.quantityInCart - 1, 1) }
          : item
      )
    );
  };


  function calculateTotalPrice(item: wishlistProps) {
    return item.price * item.quantityInCart;
  }



  return (
    <>
      <Navbar />
      <div className='mx-4 xs:mx-0 mt-20 max-w-[1248px]'>
        {/* first */}
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-4">
          <div className="sm:mx-2  flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6663 10H3.33301M3.33301 10L8.33301 15M3.33301 10L8.33301 5" stroke="#4D0039" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
              Continue Shopping
            </p>
          </div>
        </div>

        {/* second */}
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[72px] p-4 bg-white">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
            {/* imaglogo */}
            <img src={heart} />
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
              Wishlist
            </p>
          </div>
        </div>
        {/* third */}

        <div className="md:flex-wrap sm:flex-wrap xs:flex-wrap  flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10 px-4 xs:px-0  pb-12 bg-white">
          <div className="flex flex-col justify-start items-start flex-grow gap-2">
            <div className="md:hidden sm:hidden xs:hidden flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 py-8 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                <p className="flex-grow w-10 text-lg font-bold text-left text-black">Item</p>
              </div>
              <div className="mr-20 flex justify-end items-center flex-grow-0 flex-shrink-0  h-10 gap-">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-32 relative gap-1">
                  <p className="flex-grow-0 text-start flex-shrink-0 text-lg font-bold  text-black">
                    Subtotal
                  </p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-32 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 ml-10 text-lg font-bold text-center text-black">
                    Quantity
                  </p>
                </div>
              </div>
            </div>
            {wishing.map((item) => (
              <div className="sm:h-[190px] md:flex-wrap md:mx-2 sm:flex-wrap sm:mx-4 xs:flex-wrap xs:mx-6 flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-40 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center flex-grow gap-3 sm:gap-2">
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-24 w-24 relative overflow-hidden gap-5 rounded-xl bg-white border border-[#eaecf0]">
                    <img src={item.image} className="self-stretch flex-grow object-contain" />
                  </div>
                  <div className="  lg:h-[112px] sm:justify-center flex sm:gap-0 sm:h-24  flex-col justify-start items-start flex-grow h-24  overflow-hidden gap-2 xs:gap-0">
                    <div className="flex  2xl:w-72 xl:72 lg:72 md:72 justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                      <p className="line-clamp-2 flex-grow 2xl:w-72 xl:72 lg:72 md:72 text-sm font-semibold text-left text-black">
                        {item.name}
                      </p>

                  </div>
                    <div className="lg:flex-wrap xs:h-[112px] md:flex-row sm:flex-wrap sm:gap-1 items-start  xs:flex-col flex justify-start  self-stretch flex-grow-0 flex-shrink-0 gap-2">
                      <div className=" xs:mt-0.5 flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] px-2  rounded-md bg-white border border-[#eaecf0]">
                        <p className="flex-grow-0 my-1  xm:py flex-shrink-0 text-xs text-center text-[#475467]">
                          Designer Edition
                        </p>
                      </div>
                      <div className="flex mt-0.5 xs:mt-0 justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
                          <div className="flex-grow-0 flex-shrink-0 w-5 h-5 relative overflow-hidden rounded-[10px] bg-gradient-to-tr from-[#ff7a00] to-[#ffd439]" />
                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#475467]">
                            Sunset Golden Yellow
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="lg:flex-wrap lg:mr-4 md:my-0 flex sm:gap-0 justify-end items-center flex-grow-0 flex-shrink-0  h-10 gap-1">
                  <div className="flex ">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 p-1 rounded-lg">
                    <img src={deletebutton} alt="minus" className="flex-grow-0 flex-shrink-0 relative" />
                  </div>
                  <div className="flex xs:w-[90px]  justify-start items-center flex-grow-0 flex-shrink-0 w-32 sm:w-24 xs:w-18 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                      Kshs.
                    </p>
                    <p className="flex-grow w-[87px] xs:w-[50px] text-sm font-medium text-left text-black">{calculateTotalPrice(item)}</p>
                  </div>

                  </div>
                  <div className="flex">
                  <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-32 sm:w-24  relative overflow-hidden  xs:px-2 px-4 py-2.5 rounded-lg bg-white border border-[#f2f4f7]">
                    <img onClick={() => handleDecrement(item.id)} src={minus} alt="minus" className="flex-grow-0 flex-shrink-0 relative" />
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#344054]">{item.quantityInCart}</p>
                    <img onClick={() => handleIncrement(item.id)} src={plus} alt="plus" className="flex-grow-0 flex-shrink-0 relative" />
                  </div>
                  <div>
                    <img  src={cart} alt="button" className="mx-2" />
                  </div>
                </div>
                </div>
              </div>
            ))}
            <div className="xs:mx-5  flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 h-[72px] gap-1 py-4 bg-white">
              <div
                className="flex w-[352px] xs:w-[160px] 2xs:w-[160px] justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#66004b] border-0 border-[#66004b]"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_4617_12884)">
                    <path
                      d="M4.16711 11.6667H15.1135C15.9576 11.6667 16.3796 11.6667 16.7155 11.5094C17.0115 11.3708 17.2601 11.1482 17.4306 10.8694C17.6241 10.5529 17.6707 10.1334 17.7639 9.29457L18.2514 4.90704C18.2799 4.65082 18.2941 4.52271 18.2529 4.42355C18.2167 4.33646 18.1521 4.26422 18.0695 4.21865C17.9755 4.16675 17.8466 4.16675 17.5888 4.16675H3.75044M1.66699 1.66675H2.70736C2.92788 1.66675 3.03814 1.66675 3.1244 1.70869C3.20034 1.7456 3.26327 1.80473 3.30486 1.87822C3.35209 1.96169 3.35897 2.07174 3.37273 2.29183L4.12792 14.375C4.14168 14.5951 4.14856 14.7051 4.19579 14.7886C4.23738 14.8621 4.30031 14.9212 4.37625 14.9581C4.46251 15.0001 4.57277 15.0001 4.79329 15.0001H15.8337M6.25033 17.9167H6.25866M13.7503 17.9167H13.7587M6.66699 17.9167C6.66699 18.1469 6.48044 18.3334 6.25033 18.3334C6.02021 18.3334 5.83366 18.1469 5.83366 17.9167C5.83366 17.6866 6.02021 17.5001 6.25033 17.5001C6.48044 17.5001 6.66699 17.6866 6.66699 17.9167ZM14.167 17.9167C14.167 18.1469 13.9804 18.3334 13.7503 18.3334C13.5202 18.3334 13.3337 18.1469 13.3337 17.9167C13.3337 17.6866 13.5202 17.5001 13.7503 17.5001C13.9804 17.5001 14.167 17.6866 14.167 17.9167Z"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>

                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                  Add to Cart
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-10 px-4 py-20 bg-white">
          <div className="flex  flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-64 h-64 gap-5 px-6 pt-6 bg-[url(&#x27;content.png&#x27;)] bg-contain bg-no-repeat bg-center">
            <img src={wishlist} alt="empty"/>
          </div>
          <div className="flex flex-col  items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 w-[352px] text-3xl font-semibold text-center text-[#870064]">
                Your Wishlist Awaits
              </p>
            </div>
            <p className="flex-grow-0 flex-shrink-0 w-[352px] text-sm text-center text-[#475467]">
              Add items to your wishlist as you browse and they will magically appear here.
            </p>
          </div>
          <div className="flex xs:flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-3">
            <Link to="/catalog"
                className="flex max-w-[352px] justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]">
              <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
              >
                <path
                    d="M15.8337 9.99996H4.16699M4.16699 9.99996L10.0003 15.8333M4.16699 9.99996L10.0003 4.16663"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                Browse Our Catalog
              </p>
            </Link>
            <Link to="/shopping"
                className="flex max-w-[352px]  justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#fff0fb] border border-[#ffb8ec]">
              <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_8135_2482)">
                  <path
                      d="M4.16711 11.6666H15.1135C15.9576 11.6666 16.3796 11.6666 16.7155 11.5093C17.0115 11.3706 17.2601 11.1481 17.4306 10.8693C17.6241 10.5527 17.6707 10.1333 17.7639 9.29444L18.2514 4.90691C18.2799 4.65069 18.2941 4.52259 18.2529 4.42343C18.2167 4.33634 18.1521 4.2641 18.0695 4.21852C17.9755 4.16663 17.8466 4.16663 17.5888 4.16663H3.75044M1.66699 1.66663H2.70736C2.92788 1.66663 3.03814 1.66663 3.1244 1.70856C3.20034 1.74548 3.26327 1.8046 3.30486 1.87809C3.35209 1.96157 3.35897 2.07162 3.37273 2.29171L4.12792 14.3749C4.14168 14.595 4.14856 14.705 4.19579 14.7885C4.23738 14.862 4.30031 14.9211 4.37625 14.958C4.46251 15 4.57277 15 4.79329 15H15.8337M6.25033 17.9166H6.25866M13.7503 17.9166H13.7587M6.66699 17.9166C6.66699 18.1467 6.48044 18.3333 6.25033 18.3333C6.02021 18.3333 5.83366 18.1467 5.83366 17.9166C5.83366 17.6865 6.02021 17.5 6.25033 17.5C6.48044 17.5 6.66699 17.6865 6.66699 17.9166ZM14.167 17.9166C14.167 18.1467 13.9804 18.3333 13.7503 18.3333C13.5202 18.3333 13.3337 18.1467 13.3337 17.9166C13.3337 17.6865 13.5202 17.5 13.7503 17.5C13.9804 17.5 14.167 17.6865 14.167 17.9166Z"
                      stroke="#4D0039"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_8135_2482">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#4d0039]">
                Go To Your Cart
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WishList
