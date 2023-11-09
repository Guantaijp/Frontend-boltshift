import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

interface SectionShipping {
    id: number;
    item: string;
}

const shipping: SectionShipping[] = [
    {
        id: 1,
        item: "Free",
    },
    {
        id: 2,
        item: "Saving",
    },
    {
        id: 3,
        item: "Free",
    },
];

function SectionShipping() {
    return (
        <>
            {shipping.map((shippingItem) => (
                <div key={shippingItem.id} className="flex px-4  items-center focus:w-full focus:bg-[#FFF0FB] hover:w-full hover:bg-[#FFF0FB] hover:text-[#870064]focus:text-[#870064]">
                    <Checkbox.Root
                        className="ml-3 my-2 flex h-[20px] w-[20px] border border-[#d0d5dd] items-center justify-center bg-white rounded-md hover:text-[#870064] outline-none"
                        id={`c${shippingItem.id}`}
                    >
                        <Checkbox.Indicator className="">
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label className="pl-2 text-sm text-[#475467] flex rounded-md focus:text-[#870064] hover:bg-[#FFF0FB] hover:text-[#870064] font-medium text-left focus:bg-[#FFF0FB] focus:w-full" htmlFor={`c${shippingItem.id}`}>
                        {shippingItem.item}
                    </label>
                </div>
            ))}
        </>
    );
}

export default SectionShipping;
