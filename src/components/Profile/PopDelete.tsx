
import * as Dialog from '@radix-ui/react-dialog';
import PopToast from './PopToast';

function PopDelete() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 p-4 rounded-lg bg-white">
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
                d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                stroke="#F04438"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow w-[104px] text-sm font-medium text-left text-[#f04438]">Delete</p>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal >
          
          <Dialog.Overlay style={{
           
            backgroundColor: 'rgba(0, 0, 0, 0.30)',
          }} />
          <Dialog.Content 
          style={{
            
            backgroundColor: 'rgba(0, 0, 0, 0.30)',
          }}
          className=" fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] ">
          
            <div
              className="flex flex-col justify-start items-center w-[544px] relative overflow-hidden rounded-xl bg-white"
              style={{ boxShadow: "0px 0px 0px 4px #fee4e2" }}
            >
              <svg
                width={216}
                height={196}
                viewBox="0 0 216 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[336px] h-[336px] absolute left-[-120px] top-[-120px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <mask
                  id="mask0_9717_18936"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={-120}
                  y={-120}
                  width={336}
                  height={336}
                >
                  <rect
                    width={336}
                    height={336}
                    transform="translate(-120 -120)"
                    fill="url(#paint0_radial_9717_18936)"
                  />
                </mask>
                <g mask="url(#mask0_9717_18936)">
                  <circle cx={48} cy={48} r="47.5" stroke="#EAECF0" />
                  <circle cx={48} cy={48} r="47.5" stroke="#EAECF0" />
                  <circle cx={48} cy={48} r="71.5" stroke="#EAECF0" />
                  <circle cx={48} cy={48} r="95.5" stroke="#EAECF0" />
                  <circle cx={48} cy={48} r="119.5" stroke="#EAECF0" />
                  <circle cx={48} cy={48} r="143.5" stroke="#EAECF0" />
                  <circle cx={48} cy={48} r="167.5" stroke="#EAECF0" />
                </g>

              </svg>
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-6 pt-6">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="#FFE0F7"
                    />
                    <path
                      d="M18.6667 11.9999V11.4666C18.6667 10.7198 18.6667 10.3465 18.5213 10.0613C18.3935 9.81038 18.1895 9.60641 17.9387 9.47858C17.6534 9.33325 17.2801 9.33325 16.5333 9.33325H15.4667C14.7199 9.33325 14.3466 9.33325 14.0613 9.47858C13.8105 9.60641 13.6065 9.81038 13.4787 10.0613C13.3333 10.3465 13.3333 10.7198 13.3333 11.4666V11.9999M14.6667 15.6666V18.9999M17.3333 15.6666V18.9999M10 11.9999H22M20.6667 11.9999V19.4666C20.6667 20.5867 20.6667 21.1467 20.4487 21.5746C20.2569 21.9509 19.951 22.2569 19.5746 22.4486C19.1468 22.6666 18.5868 22.6666 17.4667 22.6666H14.5333C13.4132 22.6666 12.8532 22.6666 12.4254 22.4486C12.049 22.2569 11.7431 21.9509 11.5513 21.5746C11.3333 21.1467 11.3333 20.5867 11.3333 19.4666V11.9999"
                      stroke="#D92D20"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[432px] text-lg font-semibold text-left text-[#101828]">
                      Delete Voucher
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[432px] text-sm text-left text-[#475467]">
                      Are you sure you want to delete the voucher? This action cannot be undone.
                    </p>
                  </div>
                </div>

                <Dialog.Close asChild>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[488px] top-3 overflow-hidden p-2.5 rounded-lg">
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
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#667085"
                      stroke-width={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                </Dialog.Close> 
              </div>
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 pt-8">
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-3 pl-[88px] pr-6 pb-6">
                  <div className="flex justify-end items-center flex-grow gap-3">
                  <Dialog.Close asChild>
                    <div
                      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-white border border-[#d0d5dd]"
                      style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                    >
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#344054]">
                        Cancel
                      </p>
                    </div>
                    </Dialog.Close>
                    {/* <div
                      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#d92d20] border border-[#d92d20]"
                      style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                    >
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                        Delete
                      </p>
                    </div> */}
                    <PopToast />
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default PopDelete