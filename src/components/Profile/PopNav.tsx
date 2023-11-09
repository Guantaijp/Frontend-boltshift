import { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';


type GradientColor = [string, string];

const gradientColors: GradientColor[] = [
  ['#FF9DE4', '#FFEAF6'],
  ['#FF7EC7', '#FFED46'],
  ['#A6C0FE', '#FFEAF6'],
  ['#84FAB0', '#ACCBEE'],
  ['#96FBC4', '#F9F586'],
  ['#89F7FE', '#66A6FF'],
  ['#FFA8A8', '#FCFF00'],
  ['#F5C8F5', '#DADDFA'],
];

function PopNav() {
  const [selectedColor, setSelectedColor] = useState<GradientColor | null>(null);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const handleColorSelect = (colors: GradientColor) => {
    setSelectedColor(colors === selectedColor ? null : colors);

    setIsAlertDialogOpen(true);
  };


  return (
    <>

      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
        <div
            className={`flex justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[294px] top-2.5 overflow-hidden gap-2.5 p-2 rounded-2xl bg-white border border-[#c644a3] ${
              isAlertDialogOpen ? 'hover:bg-[#f2f4f7]' : ''
            }`}
            onClick={() => setIsAlertDialogOpen(true)}
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_4880_33011)">
                <path
                  opacity="0.12"
                  d="M1.33203 14.6667C2.66536 14.6667 4.40404 14.8945 5.31526 13.9832C6.22649 13.072 6.22649 11.5946 5.31526 10.6834C4.40404 9.77219 2.92665 9.77219 2.01543 10.6834C1.10421 11.5946 2.01543 13.3333 1.33203 14.6667Z"
                  fill="#C644A3"
                />
                <path
                  d="M5.99868 7.48151L8.5172 10M5.31526 13.9833C4.40404 14.8945 2.66536 14.6667 1.33203 14.6667C2.01543 13.3334 1.10421 11.5947 2.01543 10.6835C2.92665 9.77223 4.40404 9.77223 5.31526 10.6835C6.22649 11.5947 6.22649 13.0721 5.31526 13.9833ZM7.94643 10.6164L14.0378 4.03773C14.5744 3.45828 14.5571 2.55843 13.9987 2.00003C13.4403 1.44164 12.5404 1.42434 11.961 1.96086L5.38226 8.05226C5.04230 8.36704 4.87232 8.52443 4.77318 8.69228C4.53546 9.09479 4.52589 9.59240 4.74797 10.0037C4.84058 10.1753 5.00439 10.3391 5.33200 10.6667C5.65960 10.9943 5.82341 11.1581 5.99495 11.2507C6.40630 11.4728 6.90391 11.4632 7.30641 11.2255C7.47427 11.1264 7.63166 10.9564 7.94643 10.6164Z"
                  stroke="#C644A3"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          
          <AlertDialog.Overlay
              style={{
                boxShadow: '0px 0px 0px 4px #FEE4E2',
                backgroundColor: 'rgba(0, 0, 0, 0.30)',
              }}
              className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 " />
          <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  w-[387px]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white py-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
          >
            <div className="flex flex-col pt-4px justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                <svg
                  width={52}
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g filter="url(#filter0_d_11119_3354)">
                    <rect x={2} y={1} width={48} height={48} rx={10} fill="white" />
                    <path
                      d="M23 24.2221L26.7778 27.9999M21.9748 33.9748C20.608 35.3416 18 34.9999 16 34.9999C17.0251 32.9999 15.6583 30.3919 17.0251 29.0251C18.3919 27.6582 20.608 27.6582 21.9748 29.0251C23.3417 30.3919 23.3417 32.608 21.9748 33.9748ZM25.9216 28.9245L35.0587 19.0565C35.8635 18.1873 35.8375 16.8375 34.9999 15.9999C34.1624 15.1623 32.8126 15.1364 31.9434 15.9412L22.0753 25.0783C21.5654 25.5504 21.3104 25.7865 21.1617 26.0383C20.8051 26.6421 20.7908 27.3885 21.1239 28.0055C21.2628 28.2628 21.5085 28.5085 21.9999 28.9999C22.4914 29.4913 22.7371 29.737 22.9944 29.876C23.6114 30.2091 24.3578 30.1947 24.9616 29.8381C25.2134 29.6894 25.4494 29.4345 25.9216 28.9245Z"
                      stroke="#344054"
                      stroke-width={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect x="2.5" y="1.5" width={47} height={47} rx="9.5" stroke="#EAECF0" />
                  </g>

                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[291px] text-lg font-semibold text-left text-[#101828]">
                    Edit Profile Background
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[291px] text-sm text-left text-[#475467]">
                    Select a gradient below
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-4 pt-8">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-start flex-grow">
                  {gradientColors.map((colors, index) => (
                    <div
                      key={index}
                      className={`flex justify-start items-start flex-grow-0 flex-shrink-0 w-28px h-28px relative gap-2 p-1.5 rounded-3xl ${selectedColor === colors ? 'border-2 border-pink-700' : 'border-2 border-transparent'}
                      '
                        }`}
                      onClick={() => handleColorSelect(colors)}
                    >
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="self-stretch flex-grow"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <circle cx={14} cy={14} r={14} fill={`url(#paint0_linear_${index})`} />
                        <defs>
                          <linearGradient
                            id={`paint0_linear_${index}`}
                            x1="0"
                            y1="28"
                            x2="28"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor={colors[0]} />
                            <stop offset={1} stopColor={colors[1]} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="self-stretch flex-grow-0 flex-shrink-0 h-40 w-355 relative rounded-xl bg-gradient-to-tr from-[#ff9de4] to-[#ffeaf6] border border-[#ffe0f7]" />

            </div>
            <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 pt-8">
              <div className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="387" height="1" viewBox="0 0 387 1" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M387 1H0V0H387V1Z" fill="#EAECF0"/>
              </svg>
              </div>
              <div className="my flex justify-center  items-center self-stretch flex-grow-0 flex-shrink-0 gap-4 px-8 ">
                <div className="flex justify-center items-center flex-grow ">
                  <AlertDialog.Cancel asChild>
                    <button
                      className="outline-none flex justify-center  items-center flex-grow relative overflow-hidden gap-2 px-6 py-3 rounded-lg bg-white border border-1 border-[#d0d5dd] text-[#344054] font-semibold"
                      style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                    >
                      Close
                    </button>
                  </AlertDialog.Cancel>
                </div>

                <AlertDialog.Action asChild>
                  <button
                    className="flex justify-center items-center flex-grow relative overflow-hidden gap-2  py-3 rounded-lg bg-[#66004b] border border-[#66004b] text-white font-semibold"
                    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                  >
                    Save changes
                  </button>
                </AlertDialog.Action>
              </div>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
}

export default PopNav;
