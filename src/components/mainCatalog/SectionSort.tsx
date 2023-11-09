// import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectIcon,
    SelectItem,
    SelectPortal,
    SelectTrigger,
    SelectValue, SelectViewport,
} from '@radix-ui/react-select';

interface SectionSort {
    id: number;
    name: string;
    description: string;
}

const SectionSort = () => {
    const sectionSort: SectionSort[] = [
        {
            id: 1,
            name: 'Latest',
            description: 'latest',
        },
        {
            id: 2,
            name: 'Oldest',
            description: 'oldest',
        },
        {
            id: 3,
            name: 'Popular',
            description: 'popular',
        }
        ];

    const [selectedItem, setSelectedItem] = useState<SectionSort | null>(null);

    const handleSelectChange = (value: SectionSort | null) => {
        setSelectedItem(value);
    }

    // const [selectedItem, setSelectedItem] = useState<string | null>(null);
    //
    // const handleSelectChange = (value: string | null) => {
    //     setSelectedItem(value);
    // }


    return (
        <div className='my-2'>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054] my-1 ">Sort By</p>

            <Select
                value={selectedItem ? selectedItem.name : undefined}
                onValueChange={handleSelectChange as unknown as (value: string | null) => void}
            >
                <SelectTrigger className=" inline-flex w-full p-2 py-3 items-center justify-between rounded-lg bg-white text-violet11 border outline-none ">
                    <SelectValue
                        aria-label={selectedItem ? selectedItem.name : 'Sort By'}
                        className=" flex-grow w-[175px] text-sm text-left text-black">
                        {selectedItem ? selectedItem.name : 'Sort By'}
                    </SelectValue>
                    <SelectIcon className="text-violet11">
                        <ChevronDownIcon />
                    </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                    <SelectContent
                        position="popper"
                        sideOffset={5}
                        align='start'
                        className="bg-white w-[340px] rounded-lg shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] ">
                        <SelectViewport className="w-full">
                            {sectionSort.map((item) => (
                                <SelectItem
                                    className="m-2 text-[#0c111d] data-[highlighted]:outline-none data-[highlighted]:bg-[#fff0fb] data-[highlighted]:text-[#870064] select-none data-[disabled]:text-[#870064] focus:bg-[#fff0fb] outline-none rounded-lg focus:text-red-600 flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3 py-2 "
                                    value={item as unknown as string}
                                    key={item.id}
                                >
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectViewport>
                    </SelectContent>
                </SelectPortal>
            </Select>
        </div>
    );
};

export default SectionSort;