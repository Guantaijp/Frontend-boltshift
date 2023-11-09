// import image from '../../assets/Product.svg'
// import image2 from "../../assets/product1.png";
// import image3 from "../../assets/product2.png";
// import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/Product.svg';


// interface HeroWebProps {
//     id: number;
//     name: string;
//     image: string;
//     price: number;
//     description: string;
// }

const HeroWeb: React.FC = () => {

    // const heroWeb: HeroWebProps[] = [
    //     {
    //         id: 1,
    //         name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
    //         image: image,
    //         price: 92372.97,
    //         description: "This velvet couch is a sophisticated and trendy sofa that focuses on furniture\n" +
    //             "                                            because of its sumptuous velvet quilted fabric and strong wood legs. Make the living\n" +
    //             "                                            area feel like a million bucks with this couch because this three-seated couch is\n" +
    //             "                                            sleek and trendy, converting any living area into a fashionable environment. This\n" +
    //             "                                            sofa's robust wood construction ensures it will provide years of reliable service.\n" +
    //             "                                            With its long-lasting support and deep comfort, this couch is the perfect choice for\n" +
    //             "                                            your home. As for the inside, it's comprised of solid, high-resilience foam, a\n" +
    //             "                                            substance chosen for its ability to return to its former shape swiftly and with a\n" +
    //             "                                            nice greeting.",
    //     },
    //     {
    //         id: 2,
    //         name: 'At&t iPhone 13 Pro 256gb Graphite, Gray',
    //         image: image2,
    //         price: 54436.03,
    //         description: "This velvet couch is a sophisticated and trendy sofa that focuses on furniture\n" +
    //             "                                            because of its sumptuous velvet quilted fabric and strong wood legs. Make the living\n" +
    //             "                                            area feel like a million bucks with this couch because this three-seated couch is\n" +
    //             "                                            sleek and trendy, converting any living area into a fashionable environment. This\n" +
    //             "                                            sofa's robust wood construction ensures it will provide years of reliable service.\n" +
    //             "                                            With its long-lasting support and deep comfort, this couch is the perfect choice for\n" +
    //             "                                            your home. As for the inside, it's comprised of solid, high-resilience foam, a\n" +
    //             "                                            substance chosen for its ability to return to its former shape swiftly and with a\n" +
    //             "                                            nice greeting.",
    //     },
    //     {
    //         id: 3,
    //         name: 'GUCCI G-Timeless Stainless Steel Bracelet Watch',
    //         image: image3,
    //         price: 63073.07,
    //         description: "This velvet couch is a sophisticated and trendy sofa that focuses on furniture\n" +
    //             "                                            because of its sumptuous velvet quilted fabric and strong wood legs. Make the living\n" +
    //             "        " +
    //             "                                    area feel like a million bucks with this couch because this three-seated couch is\n" +
    //             "                                            sleek and trendy, converting any living area into a fashionable environment. This\n" +
    //             "                                            sofa's robust wood construction ensures it will provide years of reliable service.\n" +
    //             "                                            With its long-lasting support and deep comfort, this couch is the perfect choice for\n" +
    //             "                                            your home. As for the inside, it's comprised of solid, high-resilience foam, a\n" +
    //             "                                            substance chosen for its ability to return to its former shape swiftly and with a\n" +
    //             "                                            nice greeting.",
    //     },
    // ];

  // const [selectedItems, setSelectedItems] = useState<HeroWebProps[]>([]);
    // const handleImageClick = (deal: HeroWebProps) => {
    //     const isItemSelected = selectedItems.some((item) => item.id === deal.id);
    //     if (isItemSelected) {
    //         setSelectedItems(selectedItems.filter((item) => item.id !== deal.id));
    //     } else {
    //         setSelectedItems([...selectedItems, deal]);
    //     }
    // }


    // const [settings, setSettings] = useState<{ appendDots: (dots) => React.JSX.Element; dots: boolean; adaptiveWidth: boolean; infinite: boolean; responsive: ({ breakpoint: number } | { breakpoint: number } | { breakpoint: number } | { breakpoint: number } | { breakpoint: number })[]; slidesToScroll: number; slidesToShow: number; speed: number; autoplay: boolean; autoplaySpeed: number }>({
    //     dots: true,
    //     infinite: true,
    //     speed: 4000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     adaptiveWidth: true,
    //     appendDots: dots => <ul className='centered-dots'>{dots}</ul>,
    //     responsive: [{ breakpoint: 1024 }, { breakpoint: 900 }, { breakpoint: 700 }, { breakpoint: 500 }, { breakpoint: 300 }],
    //
    // })
    const truncateContent = (content: string, limit: number): string => {
        const words = content.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return content;
    };




    return (
        <>


                    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-6 rounded-xl bg-gradient-to-tr from-[#e9defa] to-[#fff6eb] border border-[#eaecf0] my-12 mx-4">
                        <div className="flex flex-col justify-center items-center flex-grow gap-10 pt-20 pb-4">
                            <div className="flex flex-col  justify-center items-center flex-grow gap-10 pt-20 pb-4">
                                <div className="flex flex-col  justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-12">
                                    {/* words */}

                                    <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 ">
                                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-[3px] px-2.5 py-1 rounded-md bg-white border border-indigo-500 ">
                                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
                                                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#1f0217] ">
                                                    Opening Sales Discount 50%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                                            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                                                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                                                    <h1 className="flex-grow w-64 font-semibold text-2xl text-left text-[#870064]">
                                                        {truncateContent('Modern White Velvet 3-Seater Chanenel Tufted Upholstered Luxury Solid Wood', 10)}
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                                                <p className="flex-grow w-64 text-sm text-left text-[#475467]">
                                                    {truncateContent('This velvet couch is a sophisticated and trendy sofa that focuses on furniture because of its sumptuous velvet quilted fabric and strong wood legs. Make the living area feel like a million bucks with this couch because this three-seated couch is sleek and trendy, converting any living area into a fashionable environment. This sofas robust wood construction ensures it will provide years of reliable service. With its long-lasting support and deep comfort, this couch is the perfect choice for your home. As for the inside, its comprised of solid, high-resilience foam, a substance chosen for its ability to return to its former shape swiftly and with a nice greeting.', 13)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#66004b] border border-[#66004b]"
                                        style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                                    >
                                        <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                                            Shop Now
                                        </p>
                                        <svg
                                            width={21}
                                            height={21}
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M8 15.5L13 10.5L8 5.5"
                                                stroke="white"
                                                stroke-width="1.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                                    <div className="flex-grow-0 flex-shrink-0 w-2 h-2 relative overflow-hidden rounded bg-[#4d0039]" />
                                    <div className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative overflow-hidden rounded-md bg-[#f2f4f7] mix-blend-multiply" />
                                    <div className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative overflow-hidden rounded-md bg-[#f2f4f7] mix-blend-multiply" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-592px w-[592px] relative overflow-hidden bg-white">
                            <img src={image} className="self-stretch w-full object-cover h-full" alt="Product" />
                        </div>
                    </div>

        </>
    )
}

export default HeroWeb

