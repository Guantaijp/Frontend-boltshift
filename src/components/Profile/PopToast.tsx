import React from 'react'
import * as Toast from '@radix-ui/react-toast';

const PopToast = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);


  return (
    <Toast.Provider swipeDirection="right">
      <button
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#d92d20] border border-[#d92d20]"
        style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {

            setOpen(true);
          }, 100);
        }}
      >
        <div>
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
            Delete
          </p>
        </div>
      </button>

      <Toast.Root
        
        open={open}
        onOpenChange={setOpen}
      >
  
  <div
    className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-4 p-4 rounded-lg bg-white"
    style={{
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
    }}
  >
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-9 h-9 absolute left-[356px] top-2 overflow-hidden p-2 rounded-lg">
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
          d="M15 5L5 15M5 5L15 15"
          stroke="#98A2B3"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div className="flex justify-start items-start flex-grow relative gap-4 pr-8">
      <svg
        width={44}
        height={44}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <g opacity="0.3">
          <path
            d="M22 36C14.268 36 8 29.732 8 22C8 14.268 14.268 8 22 8C29.732 8 36 14.268 36 22C36 29.732 29.732 36 22 36Z"
            stroke="#D92D20"
            stroke-width={2}
          />
        </g>
        <g opacity="0.1">
          <path
            d="M22 42.25C10.8162 42.25 1.75 33.1838 1.75 22C1.75 10.8162 10.8162 1.75 22 1.75C33.1838 1.75 42.25 10.8162 42.25 22C42.25 33.1838 33.1838 42.25 22 42.25Z"
            stroke="#D92D20"
            stroke-width={2}
          />
        </g>
        <path
          d="M25.3333 17.0001V16.3334C25.3333 15.4 25.3333 14.9333 25.1517 14.5768C24.9919 14.2632 24.7369 14.0082 24.4233 13.8484C24.0668 13.6667 23.6001 13.6667 22.6667 13.6667H21.3333C20.3999 13.6667 19.9332 13.6667 19.5767 13.8484C19.2631 14.0082 19.0081 14.2632 18.8483 14.5768C18.6667 14.9333 18.6667 15.4 18.6667 16.3334V17.0001M20.3333 21.5834V25.7501M23.6667 21.5834V25.7501M14.5 17.0001H29.5M27.8333 17.0001V26.3334C27.8333 27.7335 27.8333 28.4336 27.5608 28.9684C27.3212 29.4388 26.9387 29.8212 26.4683 30.0609C25.9335 30.3334 25.2335 30.3334 23.8333 30.3334H20.1667C18.7665 30.3334 18.0665 30.3334 17.5317 30.0609C17.0613 29.8212 16.6788 29.4388 16.4392 28.9684C16.1667 28.4336 16.1667 27.7335 16.1667 26.3334V17.0001"
          stroke="#D92D20"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="flex flex-col justify-start items-start flex-grow gap-3 pt-0.5">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[300px] text-sm font-semibold text-left text-[#101828]">
            Voucher Deleted
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[300px] text-sm text-left text-[#344054]">
            The voucher has been deleted from your account.
          </p>
        </div>
      </div>
    </div>
  </div>

       
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

export default PopToast