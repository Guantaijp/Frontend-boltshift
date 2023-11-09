import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import minus from '../../assets/minus-square.svg';
import SectionItems from './SectionItems';
import BrandSection from './BrandSection';
import SectionShipping from './SectionShiping';
import Instock from './Instock';
import SectionCrear from './SectionCrear';
import PopularTag from './PopularTag';
import SectionPrice from './SectionPrice';
import SectionSort from './SectionSort';
import bag from '../../assets/Shopping bags.svg';
import SectionRating from './SectionRating.tsx'


interface AccordionItemProps extends React.ComponentProps<typeof Accordion.Item> {
    children: React.ReactNode;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ children, ...props }, forwardedRef) => (
        <Accordion.Item
            className='px-1 '
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    )
);

//   
interface AccordionTriggerProps extends React.ComponentProps<typeof Accordion.Trigger> {
    children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ children, ...props }, forwardedRef) => (
        <Accordion.Header className=" flex text-xl outline-none font-semibold text-left text-[#0c111d] focus:bg-[#FFF0FB]  hover:bg-[#FFF0FB] rounded-md hover:text-[#870064] focus:text-[#870064]">
            <Accordion.Trigger className=
                'group flex h-[55px] flex-1  items-center justify-between  px-2 text-xl outline-none font-semibold text-left text-[#0c111d] focus:bg-[#FFF0FB]  hover:bg-[#FFF0FB] rounded-md hover:text-[#870064] focus:text-[#870064] '
                {...props}
                ref={forwardedRef}
            >
                {children}
                <img src={minus} alt="down" className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
        </Accordion.Header>
    )
);

interface AccordionContentProps extends React.ComponentProps<typeof Accordion.Content> {
    children: React.ReactNode;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ children, ...props }, forwardedRef) => (
        <Accordion.Content
            className=' text-[#0C111D]  '
            {...props}
            ref={forwardedRef}
        >
            <div className="">{children}</div>
        </Accordion.Content>
    )
);

function Sections() {
    return (
        <div>
            <div className="my-5 flex justify-start items-start flex-grow relative gap-1">
               <img src={bag} />
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">Catalog</p>
            </div>

                <SectionSort />
            <Accordion.Root
                className="items-center relative data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#870064] text-[#0C111D]"
                type="multiple"
                // defaultValue={[
                //     'item-1',
                //     'item-2',
                //     'item-3',
                //     'item-4',
                //     'item-5',
                //     'item-6',
                //     'item-7',
                //     'item-8',
                //
                // ]}
            >
                  
                <AccordionItem value="item-1">
                    <AccordionTrigger>Categories</AccordionTrigger>
                    <AccordionContent>
                        <SectionItems />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Brand</AccordionTrigger>
                    <AccordionContent>
                        <BrandSection />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                        <SectionPrice />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Rating</AccordionTrigger>
                    <AccordionContent>
                        <SectionRating />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Shipping</AccordionTrigger>
                    <AccordionContent>
                        <SectionShipping />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>Popular Tags</AccordionTrigger>
                    <AccordionContent>
                        <PopularTag />
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                    <Instock />
                </AccordionItem>
                <AccordionItem value="item-8">
                   
                    <SectionCrear />
                </AccordionItem>
            </Accordion.Root> 
            
        </div>
    );
}


export default Sections;
