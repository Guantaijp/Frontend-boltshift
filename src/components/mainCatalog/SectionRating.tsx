import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Rate } from 'antd'




interface ShippingItem {
  id: number;
  value: number;
  rating: number;
}

const shipping: ShippingItem[] = [
  {
    id: 1,
    value: 1,
    rating: 5,
  },
  {
    id: 2,
    value: 2,
    rating: 4,
  },
  {
    id: 3,
    value: 3,
    rating: 3,
  },
  {
    id: 4,
    value: 4,
    rating: 2,
  },
  {
    id: 5,
    value: 5,
    rating: 1,
  },
];

function SectionRating() {
  return (
    <div>
      <>
        {shipping.map((shippingItem) => (
          <div key={shippingItem.id} className="flex px-4 items-center focus:w-full focus:bg-[#FFF0FB] hover:w-full hover:bg-[#FFF0FB] hover:text-[#870064] focus:text-[#870064]">
            <Checkbox.Root
              className="ml-3 mx-2 my-2 flex h-[20px] w-[20px] border border-[#d0d5dd] items-center justify-center bg-white rounded-md hover:text-[#870064] outline-none"
            >
              <Checkbox.Indicator className="">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Rate disabled defaultValue={shippingItem.rating}
              className="text-[#FDB022] text-lg mx-1" />
              <p className=" mx-3 flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]"> {shippingItem.rating} Stars</p>
          </div>
        ))}
      </>
    </div>
  );
}

export default SectionRating; // Export the renamed custom component
