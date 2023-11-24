import Analysis from "./Analysis"

import TabsDemo from "./TabsDemo"
import Navbar from '../Navbar.tsx'
import gear from '../../assets/profile/Gear.svg'
import AccountLayout from './AccountLayout.tsx'
import Footer from '../Footer.tsx'
import {useEffect} from "react";


function Orders({profileData,getProfileData}:any) {
    useEffect(() => {
        getProfileData();
    }, []);

    return (
   <>
    <Navbar />
      <div className ="mx-4">
        <div className=" flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 p-4">
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
                        Orders
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
            <AccountLayout profileData={profileData} />
            <div>
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
              d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z"
              stroke="#870064"
              stroke-width={2}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-black">Orders</p>
        </div>
      </div>
      <Analysis />
      <TabsDemo />

    </div>
        </div>
         </div>
    <Footer/>
    </>
  )
}

export default Orders
