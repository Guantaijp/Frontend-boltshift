import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import down from '../../assets/chevron-down.svg';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';


interface Category {
    id: number;
    title: string;
    items: string[];
  }

  const categories: Category[] = [
    {
      id: 1,
      title: "Automotive",
      items: [
        "Car Care",
        "Electronics & Accessories",
        "Exterior Accessories",
        "Lights & Lighting Accessories",
        "Interior Accessories",
        "Motorcycle & Powersports",
        "Oils & Fluids",
        "Paint & Paint Supplies",
      ],

    },
    {
      id: 2,
      title: "Baby Products",
      items: [
        "Activity & Entertainment",
        "Apparel & Accessories",
        "Baby & Toddler",
        "Toys Baby",
        "Care Baby Stationery",
        "Diapering Feeding GiftS",
        "Nursery Potty Training",
        "Pregnancy & Maternity Safety",
      ],
    },
    {
      id: 3,
      title: "Beauty & Personal Care",
      items: [
        "Makeup",
        "Skin Care",
        "Hair Care",
        "Fragrance",
        "Foot, Hand & Nail Care",
        "Tools & Accessories",
        "Shave & Hair Removal",
        "Personal Care Oral Care",
      ],
    },
    {
      id: 4,
      title: "Health & Household",
      items: [
        "Baby & Child Care",
        "Health Care",
        "Household Supplies",
        "Medical Supplies & Equipment",
        "Oral Care",
        "Personal Care",
        "Sexual Wellness",
        "Sports Nutrition",
      ],
    },
    {
      id: 5,
      title: "Home & Kitchen",
      items: [
        "Kids' Home Store",
        "Kitchen & Dining",
        "Bedding",
        "Bath",
        "Furniture",
        "Home Décor",
        "Wall Art",
        "Lighting & Ceiling Fans",
      ],
    },
    {
      id: 6,
      title: "Luggage",
      items: [
        "Carry-Ons",
        "Backpacks",
        "Garment Bags",
        "Travel Totes",
        "Luggage Sets",
        "Laptop Bags",
        "Suitcases",
        "Kids' Luggage",
      ],
    },
    {
      id: 7,
      title: "Men's Fashion",
      items: [
        "Shorts",
        "Shirts",
        "Activewear",
        "Hoodies & Sweatshirts",
        "Jeans",
        "Pants",
        "Pajamas & Robes",
        "Occupational & Workwear",
      ],
    },
    {
      id: 8,
      title: "Women's Fashion",
      items: [
        "Clothing",
        "Shoes",
        "Jewelry",
        "Watches",
        "Handbags",
        "Accessories",
        "Lingerie",
        "Filter Lable",
      ],
    },
    {
      id: 9,
      title: "Pet Supplies",
      items: [
        "Dogs",
        "Cats",
        "Fish & Aquatic Pets",
        "Birds",
        "Horses",
        "Reptiles & Amphibians",
        "Small Animals",
        "Filter lable",
      ],
    },

  ];
  
interface AccordionItemProps extends React.ComponentProps<typeof Accordion.Item> {
    children: React.ReactNode;
  }

  const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ children,  ...props }, forwardedRef) => (
      <Accordion.Item
        className=' text-[#0C111D]'
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Item>
    )
  );

  interface AccordionTriggerProps extends React.ComponentProps<typeof Accordion.Trigger> {
    children: React.ReactNode;
  }
  
  const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ children, ...props }, forwardedRef) => (
      <Accordion.Header className="flex font-medium text-left text-[#0c111d] hover:bg-[#FFF0FB]  hover:w-full focus:w-full  hover:text-[#870064] focus:bg-[#FFF0FB]">
        <Accordion.Trigger className=
            'group flex py-2 px-2 flex-1  items-center justify-between  outline-none focus:bg-[#FFF0FB]  hover:w-full focus:w-full  focus:text-[#870064]'
          {...props}
          ref={forwardedRef}
        >
          {children}
          <img src={down} alt="down" className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 " />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );
  
  interface AccordionContentProps extends React.ComponentProps<typeof Accordion.Content> {
    children: React.ReactNode;
  }
  
  const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ children,...props }, forwardedRef) => (
      <Accordion.Content
        className=' text-[#0C111D] '
        {...props}
        ref={forwardedRef}
      >
        <div className="">{children}</div>
      </Accordion.Content>
    )
  );
  
  const SectionItems: React.FC = () => {
    return (
        <div>
        <Accordion.Root
          className=" items-center relative gap-2 pl-2 text-[#0C111D]"
          type="multiple"
        >
          {categories.map((category) => (
            <AccordionItem key={category.id} value={`item-${category.id}`}>
              <AccordionTrigger>{category.title}</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {category.items.map((item, index) => (
                    <li className="pl-4 text-sm font-medium text-left text-[#475467] flex focus:bg-[#FFF0FB]  focus:text-[#870064]  hover:bg-[#FFF0FB]  hover:text-[#870064] hover:w-full focus:w-full " key={index}>
                      <label className='flex my-1 focus:bg-[#FFF0FB]   focus:text-[#870064] '>
                        <Checkbox.Root
                          className="mr-1  flex h-[20px] w-[20px] border border-[#d0d5dd] items-center justify-center  bg-white   rounded-md hover:text-[#870064] outline-none "
                          id={`c-${category.id}-${index}`}
                        >
                          <Checkbox.Indicator className="">
                            <CheckIcon />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion.Root>
      </div>
    );
  };
  
    export default SectionItems;