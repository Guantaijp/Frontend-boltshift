import icon1 from "../../assets/voucher/Voucher Icon.svg";
import icon2 from "../../assets/voucher/Voucher Icon (1).svg";
import icon3 from "../../assets/voucher/Voucher Icon (2).svg";
import icon4 from "../../assets/voucher/Voucher Icon (3).svg";
import icon5 from "../../assets/voucher/Voucher Icon (4).svg";
import icon6 from "../../assets/voucher/Voucher Icon (5).svg";
import icon7 from "../../assets/voucher/Voucher Icon (6).svg";
import Navbar from '../Navbar.tsx'
import gear from '../../assets/profile/Gear.svg'
import AccountLayout from './AccountLayout.tsx'
import Footer from '../Footer.tsx'
import PopVoch from "./PopVoch.tsx";
import {useEffect} from "react";
interface Vouchers {
  id: number,
  image: string,
  code: string,
  discount: number,
  minSpend: number,
  expirationDate: string,
  category: string,
}

export default function Voucher({ profileData ,getProfileData}: any) {

  useEffect(() => {
     getProfileData();
  }, []);

  const vouchers: Vouchers[] = [
    {
      id: 1,
      image: icon1,
      code: "CO-5452-9876",
      discount: 30,
      minSpend: 1500,
      expirationDate: "16th Sep, 2023",
      category: "Shirts",
    },
    {
      id: 2,
      image: icon2,
      code: "CO-5452-9876",
      discount: 30,
      minSpend: 1500,
      expirationDate: "16th Sep, 2023",
      category: "Ladies shoes",
    },
    {
      id: 3,
      image: icon3,
      code: "CO-5452-9877",
      discount: 30,
      minSpend: 1500,
      expirationDate: "16th Sep, 2023",
      category: "Denim Jackets",
    },
    {
      id: 4,
      image: icon4,
      code: "CO-5452-9876",
      discount: 30,
      minSpend: 1500,
      expirationDate: "16th Sep, 2023",
      category: " Men Shirts",
    },
    {
      id: 6,
      image: icon5,
      code: "CO-5452-9876",
      discount: 30,
      minSpend: 1500,
      expirationDate: "16th Sep, 2023",
      category: "Watches",
    },
    {
      id: 7,
      image: icon6,
      code: "CO-5452-9876",
      discount: 30,
      minSpend: 1500,
      expirationDate: "16th Sep, 2023",
      category: "Ladies Inner wear",
    },
    {
      id: 8,
      image: icon7,
      code: "CO-5452-9876",
      discount: 30,
      minSpend: 1500,
      expirationDate: "16th Sep, 2023",
      category: "shirts",
    },
  ];

  return (

    <>
      <Navbar />
      <div className="mx-4">

        <div className=" flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 p-4 ">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67077 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67077 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z"
              stroke="#475467"
              stroke-width={2}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#D0D5DD"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
                Account
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#D0D5DD"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative pr-4">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#870064]">
                Vouchers
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[72px] p-4 bg-white">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
            <img src={gear} />

            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
              Account
            </p>
          </div>
        </div>
        <div className="flex">
          <AccountLayout profileData={ profileData} />
          <div className="mx-8 xs:mx-4 justify-center items-start flex-grow relative gap-12">

          {/*<div className="mx-8 xs:mx-0 sm:mx-0">*/}
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-8 py-4">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 bg-white">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z"
                        stroke="#870064"
                        stroke-width={2}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-black">
                      Vouchers
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full  justify-start items-start flex-grow relative gap-1.5 ">
                <div className="flex w-full  mt-0.5">
                  <div className="relative w-full  focus-ring ">

                    <input
                      // ref={inputRef}
                      className="put  w-full border border-top-[#d0d5dd] rounded-md py-2 pl-3 pr-3 text-black outline-none "
                      id="inputField"
                      type="text"
                      placeholder="Enter a voucher code"
                    />
                  </div>
                  <button
                    className="absolute mt-0.5 right-0.5 h-10 flex justify-center items-center  flex-shrink-0  overflow-hidden gap-2 px-3.5 py-2 rounded-tr-md rounded-br-md bg-[#870064] border border-[#870064]"
                    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-white">
                      Add
                    </p>
                  </button>
                </div>

              </div>




              <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-3 sm:gap-4  my-4">

                {vouchers.map((voucher) => (
                  <div className="min-w-[330px] flex justify-start items-start flex-grow-0 flex-shrink-0  overflow-hidden rounded-xl border border-[#eaecf0] w-full">
                    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 w-28 relative py-8 bg-white border-t-0 border-r border-b-0 border-l-0 border-[#d0d5dd] border-dashed">
                      <img
                        src={voucher.image}
                        className=" absolute items-center justify-center left-[-0.52px] top-[-0.52px] object-cover"
                      />

                    </div>
                    <div className="flex justify-start items-start flex-grow relative gap-2 pl-4 pr-6 py-5 bg-white">
                      <div className="flex flex-col justify-start items-start flex-grow gap-1">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">

                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#0c111d]">{voucher.code}</p>
                          </div>
                          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                              <p className=" line-clamp-1 flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#0c111d]">
                                {voucher.discount}
                              </p>
                              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#0c111d]">
                                %
                              </p>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#0c111d]">
                              off
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#0c111d]">
                              {voucher.category}
                            </p>
                          </div>
                          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#667085]">
                              Minimum Spend
                            </p>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#667085]">
                                Kshs.
                              </p>
                              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#667085]">
                                {voucher.minSpend}
                              </p>
                            </div>

                          </div>

                          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#667085]">Exp Date:</p>
                            <p className="flex-grow w-[173px] text-xs text-left text-[#667085]">{voucher.expirationDate}</p>
                          </div>
                        </div>
                      </div>
                      <PopVoch />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
