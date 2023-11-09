import * as Dialog from '@radix-ui/react-dialog';
import voucher from '../assets/Catalog/log-out-01.svg'

const Popover = () => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <div className="group gap-2 p-4 data-[highlighted]:bg-[#FFF0FB]  text-[13px] leading-none text-sm font-medium text-left text-[#344054] flex items-center relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none rounded-xl hover:bg-[#FFF0FB] hover:text-[] hover:text-[#66004B]">
                <img src={voucher} alt="check icon" />
                Log Out
            </div>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay
                style={{
                    boxShadow: '0px 0px 0px 4px #FEE4E2',
                    backgroundColor: 'rgba(0, 0, 0, 0.30)',
                }}
                className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 " />
            <Dialog.Content
                style={{
                    boxShadow: '0px 0px 0px 4px #FEE4E2',
                }}
                className="max-w-[544px]  data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <div className="flex flex-row">
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <rect x="4" y="4" width="48" height="48" rx="24" fill="#FEE4E2"></rect>
                        <path
                            d="M32 33L37 28M37 28L32 23M37 28H25M25 19H23.8C22.1198 19 21.2798 19 20.638 19.327C20.0735 19.6146 19.6146 20.0735 19.327 20.638C19 21.2798 19 22.1198 19 23.8V32.2C19 33.8802 19 34.7202 19.327 35.362C19.6146 35.9265 20.0735 36.3854 20.638 36.673C21.2798 37 22.1198 37 23.8 37H25"
                            stroke="#D92D20"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FEF3F2" stroke-width="8"></rect>
                    </svg>

                    <div className="mx-3 flex flex-col justify-start items-start flex-grow relative gap-1">
                        <Dialog.Title className="self-stretch flex-grow-0 flex-shrink-0  text-lg font-semibold text-left text-[#101828]">
                            Log Out
                        </Dialog.Title>
                        <Dialog.Description className="self-stretch flex-grow-0 flex-shrink-0 text-sm text-left text-[#475467]">
                            Sign out and continue browsing our catalogue as a guest.
                        </Dialog.Description>
                    </div>
                </div>


                <div className="self-stretch  flex-shrink-0  pl-[88px] pr-6 mt-8  flex justify-end items-center flex-grow gap-3">
                    <Dialog.Close asChild>
                        <div
                            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-white border border-[#d0d5dd]"
                            style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)',}}
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#344054]">
                                Cancel
                            </p>
                        </div>
                    </Dialog.Close>

                    <div
                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-white border border-[#fda29b]"
                        style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)',}}
                    >
                        <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#b42318]">
                            Log Out
                        </p>
                    </div>
                </div>

                <Dialog.Close asChild>
                    <button
                        className="absolute top-[24px] right-[22px] inline-flex outline-none h-[25px] w-[25px] appearance-none  focus:outline-none items-center justify-center rounded-full "
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default Popover
