import * as Select from '@radix-ui/react-select';
import { useState } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

interface SelectVoucher {
    id: number;
    name: string;
    description: string;
    expiryDate: string;
}

const SelectVoucherComponent: React.FC = () => {
    const selectVoucher: SelectVoucher[] = [
        {
            id: 1,
            name: '40% off Shopping',
            description: 'CO-431-2021',
            expiryDate: '15th Sept 2021',
        },
        {
            id: 2,
            name: '25% off Lingeries',
            description: 'CO-432-2021',
            expiryDate: '15th Aug 2021',
        },
        {
            id: 3,
            name: '5% off Electronics',
            description: 'CO-433-2021',
            expiryDate: '15th Oct 2021',
        },
        {
            id: 4,
            name: '35% off Furniture',
            description: 'CO-434-2021',
            expiryDate: '15th Nov 2021',
        },
        {
            id: 5,
            name: '20% off Shoes',
            description: 'CO-435-2021',
            expiryDate: '15th Dec 2021',
        },
        {
            id: 6,
            name: '10% off Groceries',
            description: 'CO-436-2021',
            expiryDate: '15th Jan 2022',
        },
    ];


    const [selectedItem, setSelectedItem] = useState<SelectVoucher | null>(null);

    const handleSelectChange = (value: SelectVoucher | null) => {
        setSelectedItem(value);
    };

    return (
        <div className="rounded-lg bg-white border border-[#d0d5dd] w-full flex flex-col justify-start items-start flex-grow relative gap-1">
        <Select.Root
            // className ="outline-none flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 overflow-hidden rounded-lg bg-white border border-[#d0d5dd]"
            value={selectedItem ? selectedItem.name : undefined}
            onValueChange={handleSelectChange as unknown as (value: string | null) => void}
        >
            <Select.Trigger className="outline-none pl-2 flex flex-row justify-between w-full items-center">
                <Select.Value
                    aria-label={selectedItem ? selectedItem.description : 'Select Voucher'}
                    className=" flex-grow w-[175px] text-sm text-left text-black">
                    {selectedItem ? selectedItem.description : 'Select Voucher'}
                </Select.Value>

                <div
                    className="flex rounded-tr-lg rounded-br-lg justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden h-[44px] w-[93px]  bg-[#66004b] border border-[#66004b]"
                    style={{
                        boxShadow: '0px 1px 2px 0 rgba(16, 24, 40, 0.05)',
                    }}
                >
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-white mx-2">Select</p>
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
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </div>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    position="popper"
                    sideOffset={5}
                    className="bg-white  flex flex-col justify-start items-start w-72 gap-2 p-3 rounded-xl  border border-[#f2f4f7]"
                    style={{
                        boxShadow: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
                    }}
                >
                    <ScrollArea.Root className=" overflow-hidden h-64 w-full">
                        <ScrollArea.Viewport className="w-full h-full rounded">
                                {selectVoucher.map((item) => (
                                    <Select.Item
                                        key={item.id}
                                        value={item as unknown as string}
                                        className="text-[#0c111d] data-[highlighted]:outline-none data-[highlighted]:bg-[#fff0fb] data-[highlighted]:text-[#870064] select-none data-[disabled]:text-[#870064] focus:bg-[#fff0fb] outline-none rounded-lg focus:text-red-600 flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3 py-2 "
                                    >
                                        <div className="f">
                                            <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left ">
                                                {item.name}
                                            </p>
                                           <div className="flex flex-row gap-1">
                                            <p className="flex-grow-0 flex-shrink-0 text-xs text-left ">
                                                {item.description}
                                            </p>
                                            <p className="self-stretch flex-grow-0 flex-shrink-0 text-xs  text-left ">
                                                Exp:{item.expiryDate}
                                            </p>
                                           </div>

                                        </div>
                                    </Select.Item>
                                ))}

                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar
                            className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                            orientation="vertical"
                        >
                            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                        </ScrollArea.Scrollbar>
                        <ScrollArea.Scrollbar
                            className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                            orientation="horizontal"
                        >
                            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                        </ScrollArea.Scrollbar>
                        <ScrollArea.Corner className="bg-blackA8" />
                    </ScrollArea.Root>

                </Select.Content>
            </Select.Portal>
        </Select.Root>
        </div>
    );
};


export default SelectVoucherComponent;
