import  { useState } from 'react'
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface SectionSort {
    id: number;
    name: string;
    description: string;
}

const SelectDemo = () => {
    const sectionSort: SectionSort[] = [
        {
            id: 1,
            name: 'Male',
            description: 'male',
        },
        {
            id: 2,
            name: 'Female',
            description: 'female',
        },
    ];

    const [selectedItem, setSelectedItem] = useState<SectionSort | null>(null);
    const handleSelectChange = (value: SectionSort | null) => {
        setSelectedItem(value);
    }
    return (
        <div className=''>

            <Select.Root
                value={selectedItem ? selectedItem.name : undefined}
                onValueChange={handleSelectChange as unknown as (value: string | null) => void}
            >
                <Select.Trigger
                    className=" inline-flex w-full p-2 py-2 items-center justify-between rounded-lg bg-white text-violet11 border outline-none "

                >
                    <Select.Value
                        aria-label={selectedItem ? selectedItem.name : 'Select Gender'}
                        className=" flex-grow w-[175px] text-sm text-left text-black">
                        {selectedItem ? selectedItem.name : 'Select Gender'}
                    </Select.Value>
                    <Select.Icon className="text-violet11">
                        <ChevronDownIcon />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content
                        position="popper"
                        sideOffset={5}
                        align='start'
                        className="bg-white w-[416px] rounded-lg shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] ">
                        <Select.Viewport className="w-full">
                            {sectionSort.map((item) => (
                                <Select.Item
                                    className="m-2 my-5 text-[#0c111d] data-[highlighted]:outline-none data-[highlighted]:bg-[#fff0fb] data-[highlighted]:text-[#870064] select-none data-[disabled]:text-[#870064] focus:bg-[#fff0fb] outline-none rounded-lg focus:text-red-600 flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3 py-2 "
                                    value={item as unknown as string}
                                    key={item.id}
                                >
                                    {item.name}
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
};


export default SelectDemo;