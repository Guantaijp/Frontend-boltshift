import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';


interface BrandSectionProps {
    id : number;
     item : string;
}

const brand: BrandSectionProps[] = [
    {
        id: 1,
         item: "3M Company",
    },
    {
        id: 2,
         item: "Apple company, Inc.",
    },
    {
        id: 3,
         item: "Caterpillar Inc.",
    },
    {
        id: 4,
         item: "Coca-Cola Co.",
    },
    {
        id: 5,
         item: "Dell Computer Corporation",
    },
    {
        id: 6,
         item: "Electronic Arts Inc.",

    },
    {
        id: 7,
         item: "Ford Motor Company",
    },
    {
        id: 8,
         item: "Gap Inc.",
    },
    {
        id: 9,
         item: "Hershey Foods Corp",
    }
]

interface AccordionItemProps extends React.ComponentProps<typeof Accordion.Item> {
    children: React.ReactNode;
  }
  
  const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ children, ...props }, forwardedRef) => (
      <Accordion.Item className='text-[#0C111D]  hover:w-full focus:w-full focus:bg-[#FFF0FB] ' {...props} ref={forwardedRef}>
        {children}
      </Accordion.Item>
    )
  );
  
  interface AccordionTriggerProps extends React.ComponentProps<typeof Accordion.Trigger> {
    children: React.ReactNode;
  }
  
  const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ children, ...props }, forwardedRef) => (
      <Accordion.Header className="pl-2 text-sm text-[#475467] flex rounded-md focus:text-[#870064] hover:bg-[#FFF0FB] hover:text-[#870064] font-medium text-left focus:bg-[#FFF0FB] focus:w-full">
        <Accordion.Trigger
          className='group flex py-1 flex-1 px-2 items-center justify-between outline-none focus:bg-[#FFF0FB] rounded-md focus:text-[#870064]  hover:w-full focus:w-full '
          {...props}
          ref={forwardedRef}
        >
          {children}
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );
  
  const BrandSection: React.FC = () => {
    return (
      <div>
        <Accordion.Root className="items-center relative gap-2 pl-2 text-[#0C111D]  hover:w-full focus:w-full focus:bg-[#FFF0FB] " type="multiple">
          {brand.map((category) => (
            <AccordionItem className='flex focus:w-full focus:bg-[#FFF0FB] hover:w-full hover:bg-[#FFF0FB] hover:text-[#870064]focus:text-[#870064]'
            key={category.id} value={`item-${category.id}`}>
              <AccordionTrigger>
                  <Checkbox.Root
                      className="mr-1  flex h-[20px] w-[20px] border border-[#d0d5dd] items-center justify-center  bg-white   rounded-md hover:text-[#870064] outline-none "
                      id={`c-${category.id}`}
                  >
                      <Checkbox.Indicator className="">
                          <CheckIcon />
                      </Checkbox.Indicator>
                  </Checkbox.Root>
              {category.item}</AccordionTrigger>
            </AccordionItem>
          ))}
        </Accordion.Root>
      </div>
    );
  };
  
  export default BrandSection;
  
