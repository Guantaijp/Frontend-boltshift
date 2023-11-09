import  { useState } from 'react';
import {  Modal } from 'antd';

function WriteReview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/*<img onClick={showModal} src={pencil} />*/}
      <div onClick={showModal}
           className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]"

      >
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
              d="M17.5002 17.4999H10.8335M2.0835 17.9166L6.70789 16.138C7.00367 16.0242 7.15156 15.9673 7.28993 15.8931C7.41283 15.8271 7.53 15.751 7.6402 15.6654C7.76426 15.5692 7.87631 15.4571 8.1004 15.233L17.5002 5.83326C18.4207 4.91279 18.4207 3.4204 17.5002 2.49993C16.5797 1.57945 15.0873 1.57945 14.1669 2.49992L4.76706 11.8997C4.54298 12.1238 4.43093 12.2358 4.33466 12.3599C4.24914 12.4701 4.173 12.5873 4.10702 12.7102C4.03275 12.8485 3.97587 12.9964 3.86211 13.2922L2.0835 17.9166ZM2.0835 17.9166L3.7986 13.4574C3.92133 13.1383 3.98269 12.9787 4.08795 12.9057C4.17993 12.8418 4.29375 12.8176 4.40374 12.8386C4.52961 12.8627 4.65048 12.9836 4.89223 13.2253L6.77481 15.1079C7.01656 15.3496 7.13743 15.4705 7.16147 15.5964C7.18247 15.7064 7.15832 15.8202 7.09445 15.9122C7.02137 16.0174 6.86182 16.0788 6.54272 16.2015L2.0835 17.9166Z"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
          ></path>
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
          Share a Review
        </p>
      </div>
      <Modal title= {
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
      <svg
        width={52}
        height={52}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <g filter="url(#filter0_d_3914_56239)">
          <rect x={2} y={1} width={48} height={48} rx={10} fill="white" />
          <path
            d="M35 34H27M16.5 34.5L22.0493 32.3657C22.4042 32.2291 22.5817 32.1609 22.7477 32.0718C22.8952 31.9926 23.0358 31.9012 23.168 31.7986C23.3169 31.6831 23.4514 31.5486 23.7203 31.2797L35 20C36.1046 18.8954 36.1046 17.1046 35 16C33.8955 14.8954 32.1046 14.8954 31 16L19.7203 27.2797C19.4514 27.5486 19.3169 27.6831 19.2014 27.832C19.0988 27.9642 19.0074 28.1048 18.9282 28.2523C18.8391 28.4183 18.7708 28.5958 18.6343 28.9507L16.5 34.5ZM16.5 34.5L18.5581 29.149C18.7054 28.766 18.779 28.5746 18.9053 28.4869C19.0157 28.4102 19.1523 28.3813 19.2843 28.4065C19.4353 28.4353 19.5804 28.5804 19.8705 28.8705L22.1296 31.1295C22.4197 31.4196 22.5647 31.5647 22.5936 31.7157C22.6188 31.8477 22.5898 31.9843 22.5131 32.0947C22.4254 32.221 22.234 32.2946 21.8511 32.4419L16.5 34.5Z"
            stroke="#344054"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect x="2.5" y="1.5" width={47} height={47} rx="9.5" stroke="#EAECF0" />
        </g>
       
      </svg>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[133px] text-lg font-semibold text-left text-[#101828]">
          Share a Review
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[133px] text-sm text-left text-black">
          Mandatory field*
        </p>
      </div>
    </div>
      }visible={isModalOpen} onCancel={handleCancel} footer={null}>
       <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 my-4">
       <div
         className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-3 rounded-md bg-white border border-[#d0d5dd]"
         style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
       >
         <div className="flex justify-start items-center flex-grow relative overflow-hidden gap-2">
          
         </div>
       </div>
       <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-2.5 top-[-10px] gap-2.5 px-1 py-px bg-white">
         <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
           Review Title*
         </p>
       </div>
     </div>
     <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
     <div
       className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-3 rounded-md bg-white border border-[#d0d5dd]"
       style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
     >
       <div className="flex justify-start items-start flex-grow relative overflow-hidden gap-2">
         <p className="flex-grow w-[500px] text-sm text-left text-black">
           <span className="flex-grow w-[500px] text-sm text-left text-black">
           
           </span>
           <br />
           <span className="flex-grow w-[500px] text-sm text-left text-black">
           
           </span>
         </p>
       </div>
       <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-4 h-[181px] absolute left-[512px] top-0 gap-2.5 p-1">
         <div className="flex-grow h-[232px] relative">
           <div className="w-2 h-[58px] absolute left-[-1px] top-[-1px] rounded-lg bg-[#eaecf0]" />
         </div>
       </div>
     </div>
     <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-2.5 top-[-10px] gap-2.5 px-1 py-px bg-white">
       <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">Review*</p>
     </div>
   </div>

<div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 mt-2">
<p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">Rating*</p>
<div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
   
{/*<Rate allowHalf defaultValue={4}  />*/}
  </div>
</div>
</div>

<div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5 py-6">
  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
    Product Media (Max 5 Files)
  </p>
  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1 px-6 py-4 rounded-xl bg-white border border-[#eaecf0] border-dashed">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
        <svg
          width={44}
          height={45}
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <g filter="url(#filter0_d_3960_26718)">
            <rect x={2} y="1.5" width={40} height={40} rx={8} fill="white" />
            <path
              d="M18.667 24.8333L22.0003 21.5M22.0003 21.5L25.3337 24.8333M22.0003 21.5V29M28.667 25.4524C29.6849 24.6117 30.3337 23.3399 30.3337 21.9167C30.3337 19.3854 28.2816 17.3333 25.7503 17.3333C25.5682 17.3333 25.3979 17.2383 25.3054 17.0814C24.2187 15.2374 22.2124 14 19.917 14C16.4652 14 13.667 16.7982 13.667 20.25C13.667 21.9718 14.3632 23.5309 15.4894 24.6613"
              stroke="#475467"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="2.5" y={2} width={39} height={39} rx="7.5" stroke="#EAECF0" />
          </g>
        
        </svg>
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
          <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4d0039]">
                Click to upload product media
              </p>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#475467]">
              or drag and drop
            </p>
          </div>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[480px] text-xs text-center text-[#475467]">
            MOV, MP4, PNG, JPG or GIF (max. 100mb per file)
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[72px] relative overflow-hidden rounded-xl bg-white border border-[#eaecf0]">
        <div className="w-[528px] h-[72px] absolute left-0 top-0 overflow-hidden" />
        <div className="flex justify-start items-start w-[464px] absolute left-4 top-4 gap-3">
          <svg
            width={40}
            height={41}
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M4 4.5C4 2.29086 5.79086 0.5 8 0.5H24L36 12.5V36.5C36 38.7091 34.2091 40.5 32 40.5H8C5.79086 40.5 4 38.7091 4 36.5V4.5Z"
              fill="#66004B"
            />
            <path
              opacity="0.3"
              d="M24 0.5L36 12.5H28C25.7909 12.5 24 10.7091 24 8.5V0.5Z"
              fill="white"
            />
            <path
              d="M24.6664 30.5H25.34C25.9875 30.5 26.3112 30.5 26.4896 30.365C26.6451 30.2474 26.7413 30.0677 26.7529 29.8731C26.7662 29.6497 26.5867 29.3804 26.2275 28.8417L24.2206 25.8313C23.9239 25.3862 23.7755 25.1636 23.5885 25.086C23.425 25.0182 23.2412 25.0182 23.0777 25.086C22.8907 25.1636 22.7423 25.3862 22.4456 25.8313L21.9495 26.5755M24.6664 30.5L19.5434 23.1001C19.2488 22.6745 19.1015 22.4618 18.9175 22.387C18.7565 22.3215 18.5764 22.3215 18.4154 22.387C18.2314 22.4618 18.0841 22.6745 17.7894 23.1001L13.8252 28.8262C13.4499 29.3684 13.2622 29.6394 13.2729 29.8649C13.2822 30.0612 13.3777 30.2435 13.5338 30.3629C13.7131 30.5 14.0428 30.5 14.7022 30.5H24.6664ZM25.9998 20.5C25.9998 21.6046 25.1043 22.5 23.9998 22.5C22.8952 22.5 21.9998 21.6046 21.9998 20.5C21.9998 19.3954 22.8952 18.5 23.9998 18.5C25.1043 18.5 25.9998 19.3954 25.9998 20.5Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex flex-col justify-start items-start flex-grow gap-1">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[412px] text-sm font-medium text-left text-[#344054]">
                Watch Image 01.jpg
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[412px] text-sm text-left text-[#475467]">
                200 KB – 100% uploaded
              </p>
            </div>
          </div>
        </div>
        <svg
          width={16}
          height={17}
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 absolute left-[496px] top-4"
          preserveAspectRatio="none"
        >
          <rect x="0.5" y={1} width={15} height={15} rx="7.5" fill="#66004B" />
          <path
            d="M11.3337 6L6.75033 10.5833L4.66699 8.5"
            stroke="white"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect x="0.5" y={1} width={15} height={15} rx="7.5" stroke="#66004B" />
        </svg>
      </div>
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[72px] relative overflow-hidden rounded-xl bg-white border border-[#eaecf0]">
        <div className="w-[369.81px] h-[72px] absolute left-0 top-0 overflow-hidden bg-gray-50" />
        <div className="flex justify-start items-start w-[456px] absolute left-4 top-4 gap-3">
          <svg
            width={40}
            height={11}
            viewBox="0 0 40 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M4 4.5C4 2.29086 5.79086 0.5 8 0.5H24L36 12.5V36.5C36 38.7091 34.2091 40.5 32 40.5H8C5.79086 40.5 4 38.7091 4 36.5V4.5Z"
              fill="#155EEF"
            />
            <path
              opacity="0.3"
              d="M24 0.5L36 12.5H28C25.7909 12.5 24 10.7091 24 8.5V0.5Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col justify-start items-start flex-grow gap-1">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[404px] text-sm font-medium text-left text-[#344054]">
                Watch Video 03.mp4
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[404px] text-sm text-left text-[#475467]">
                16 MB – 70% uploaded
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-8 absolute left-[480px] top-4">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
            <svg
              width={32}
              height={11}
              viewBox="0 0 32 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M30 16.5C30 18.3385 29.6379 20.159 28.9343 21.8576C28.2308 23.5561 27.1995 25.0995 25.8995 26.3995C24.5995 27.6995 23.0561 28.7307 21.3576 29.4343C19.659 30.1379 17.8385 30.5 16 30.5C14.1615 30.5 12.341 30.1379 10.6424 29.4343C8.94387 28.7307 7.40052 27.6995 6.1005 26.3995C4.80048 25.0995 3.76925 23.5561 3.06569 21.8576C2.36212 20.159 2 18.3385 2 16.5C2 14.6615 2.36212 12.841 3.06569 11.1424C3.76926 9.44387 4.80049 7.90052 6.10051 6.6005C7.40053 5.30048 8.94388 4.26925 10.6424 3.56568C12.341 2.86212 14.1615 2.5 16 2.5C17.8385 2.5 19.659 2.86212 21.3576 3.56569C23.0561 4.26926 24.5995 5.30049 25.8995 6.60051C27.1995 7.90053 28.2308 9.44388 28.9343 11.1424C29.6379 12.841 30 14.6615 30 16.5L30 16.5Z"
                stroke="#F2F4F7"
                stroke-width={4}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 2.5C18.5819 2.5 21.1135 3.21399 23.315 4.56304C25.5164 5.91208 27.3019 7.84363 28.4741 10.1441C29.6463 12.4446 30.1594 15.0245 29.9568 17.5984C29.7543 20.1724 28.8439 22.6402 27.3262 24.729C25.8086 26.8178 23.7429 28.4463 21.3576 29.4343C18.9722 30.4224 16.36 30.7315 13.8099 30.3276C11.2598 29.9237 8.87103 28.8225 6.90773 27.1457C4.94443 25.4689 3.48306 23.2818 2.68521 20.8262"
                stroke="#66004B"
                stroke-width={4}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-start items-start self-stretch flex-grow gap-3">
  <div
    className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-white border border-[#d0d5dd]"
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
      <path
        d="M5.83333 2.5V5.33333C5.83333 5.80004 5.83333 6.0334 5.92416 6.21166C6.00406 6.36846 6.13154 6.49594 6.28834 6.57584C6.4666 6.66667 6.69996 6.66667 7.16667 6.66667H12.8333C13.3 6.66667 13.5334 6.66667 13.7117 6.57584C13.8685 6.49594 13.9959 6.36846 14.0758 6.21166C14.1667 6.0334 14.1667 5.80004 14.1667 5.33333V3.33333M14.1667 17.5V12.1667C14.1667 11.7 14.1667 11.4666 14.0758 11.2883C13.9959 11.1315 13.8685 11.0041 13.7117 10.9242C13.5334 10.8333 13.3 10.8333 12.8333 10.8333H7.16667C6.69996 10.8333 6.4666 10.8333 6.28834 10.9242C6.13154 11.0041 6.00406 11.1315 5.92416 11.2883C5.83333 11.4666 5.83333 11.7 5.83333 12.1667V17.5M17.5 7.77124V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H12.2288C12.6364 2.5 12.8402 2.5 13.0321 2.54605C13.2021 2.58688 13.3647 2.65422 13.5138 2.7456C13.682 2.84867 13.8261 2.9928 14.1144 3.28105L16.719 5.88562C17.0072 6.17387 17.1513 6.318 17.2544 6.48619C17.3458 6.63531 17.4131 6.79789 17.4539 6.96795C17.5 7.15976 17.5 7.36358 17.5 7.77124Z"
        stroke="#344054"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#344054]">
      Save as draft
    </p>
  </div>
  <div
    className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]"
    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
  >
    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
      Submit Review
    </p>
  </div>
</div>
      </Modal>
    </>
  )
}

export default WriteReview;
