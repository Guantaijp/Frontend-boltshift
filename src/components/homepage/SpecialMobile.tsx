import React, { useState } from 'react';
import lable from '../../assets/Label.svg';
import iphone from '../../assets/iphone.svg';
import SpecialTimer from './SpecialTimer';
import check from '../../assets/_Tag checkbox.svg';

interface Special {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}


function SpecialMobile(){
    const specials: Special[] = [
        {
            id: 1,
            name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
            image: iphone,
            price: 92372.97,
            description: "This velvet couch is a sophisticated and trendy sofa that focuses on furniture\n" +
                "                                            because of its sumptuous velvet quilted fabric and strong wood legs. Make the living\n" +
                "                                            area feel like a million bucks with this couch because this three-seated couch is\n" +
                "                                            sleek and trendy, converting any living area into a fashionable environment. This\n" +
                "                                            sofa's robust wood construction ensures it will provide years of reliable service.\n" +
                "                                            With its long-lasting support and deep comfort, this couch is the perfect choice for\n" +
                "                                            your home. As for the inside, it's comprised of solid, high-resilience foam, a\n" +
                "                                            substance chosen for its ability to return to its former shape swiftly and with a\n" +
                "                                            nice greeting.",
        },
    ];

    const [selectedColor, setSelectedColor] = useState('graphite');
    const [selectedStorage, setSelectedStorage] = useState('256gb');

    const handleColorChange = (color: React.SetStateAction<string>) => {
        setSelectedColor(color);
    };

    const handleStorageChange = (storage: React.SetStateAction<string>) => {
        setSelectedStorage(storage);
    };


    return(
    <>
        {specials.map((deal) => (
        <div
            style={{
                justifyContent: 'center',
            }}
            className="mx-2 2xl:hidden xl:hidden lg:hidden md:hidden flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 px-4 py-12 bg-white">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 bg-white">
                <img src={lable} alt="Special Offer" />
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
                    Special Offer
                </p>
            </div>
            <div className=" mx-auto flex flex-wrap justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-12">
                <div className="flex flex-wrap justify-between items-center flex-grow overflow-hidden rounded-xl bg-white border border-[#eaecf0]">
                    <div className=" justify-center items-center flex-grow   bg-white">
                        <img src={deal.image} className="justify-center items-center w-full h-72 object-cover"/>
                    </div>
                    <div className="mx-auto flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10 my-4">
                        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-3">
                            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative">
                                <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-[#f04438]">
                                    NEW 2022
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-64 relative">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-64 text-xl font-semibold text-center text-black">
                                    {deal.name.length > 35 ? `${deal.name.slice(0, 43)}...` : deal.name}                                </p>
                            </div>
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] px-2.5 py-1 rounded-md bg-white border border-[#d0d5dd]">
                                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
                                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
                                        From Kshs. 999
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[129px] w-[312px] gap-4">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[310px] relative overflow-hidden">
                                <p className="flex-grow-0 flex-shrink-0 w-[289px] text-sm text-center text-black">
                                    {deal.description.length > 70 ? `${deal.description.slice(0, 80)}...` : deal.description}
                                </p>
                            </div>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1 p-1">
                                <SpecialTimer />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start flex-grow  gap-10 px-4">
                    <div
                        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2"
                    >
                        <div
                            className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative"
                        >
                            <p className="flex-grow w-[304px] text-3xl font-semibold text-left text-black">
                                {deal.name.length > 35 ? `${deal.name.slice(0, 50)}...` : deal.name}
                            </p>
                        </div>
                        <div
                            className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden"
                        >
                            <p className="flex-grow-0 flex-shrink-0 w-[289px] text-sm text-left text-[#667085]">
                                {deal.description.length > 70 ? `${deal.description.slice(0, 95)}...` : deal.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                            <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-[#475467]">
                                Color
                            </p>
                        </div>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                            <div className="mb-[0.120rem] block min-h-[1.5rem] pl-[1.5rem] ">
                                <input
                                    className={`bg-[#7A5AF8] relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid ${selectedColor === 'graphite' ? 'border-[#7A5AF8]' : 'border-neutral-300'}`}
                                    type="radio"
                                    name="color"
                                    id="graphite"
                                    checked={selectedColor === 'graphite'}
                                    onChange={() => handleColorChange('graphite')}
                                />
                            </div>
                            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className={`bg-[#EAAA08] relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid ${selectedColor === 'gray' ? 'border-[#EAAA08]' : 'border-neutral-300'}`}
                                    type="radio"
                                    name="color"
                                    id="gray"
                                    checked={selectedColor === 'gray'}
                                    onChange={() => handleColorChange('gray')}
                                />
                            </div>

                            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className={`bg-[#D0D5DD] relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid ${selectedColor === 'blue' ? 'border-[#D0D5DD]' : 'border-neutral-300'}`}
                                    type="radio"
                                    name="color"
                                    id="blue"
                                    checked={selectedColor === 'blue'}
                                    onChange={() => handleColorChange('blue')}
                                />
                            </div>
                            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    className={`bg-[#475467] relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid ${selectedColor === 'black' ? 'border-[#475467]' : 'border-neutral-300'}`}
                                    type="radio"
                                    name="color"
                                    id="black"
                                    checked={selectedColor === 'black'}
                                    onChange={() => handleColorChange('black')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                            <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-[#475467]">
                                Storage
                            </p>
                        </div>

                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                            <div className="mb-[0.125rem] block min-h-[1.5rem] relative ">
                                <input
                                    className="hidden appearance-none bg-white"
                                    type="radio"
                                    name="storage"
                                    id="128gb"
                                    checked={selectedStorage === '128gb'}
                                    onChange={() => handleStorageChange('128gb')}
                                />
                                <label
                                    className={`mt-px flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
                                        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
                                    }`}
                                    htmlFor="128gb"
                                    style={{ color: '#000', width: `${selectedStorage === '128gb' ? 'auto' : 'fit-content'}` }}
                                >
                                    {selectedStorage === '128gb' && <img src={check} alt="check" className="w-4 h-4 m-1" />}
                                    <span className="text-sm text-[#344054] font-medium mx-1">128GB</span>
                                </label>
                            </div>

                            {/* 256gb */}
                            <div className="mb-[0.125rem] block min-h-[1.5rem] relative">
                                <input
                                    className="hidden appearance-none bg-white "
                                    type="radio"
                                    name="storage"
                                    id="256gb"
                                    checked={selectedStorage === '256gb'}
                                    onChange={() => handleStorageChange('256gb')}
                                />
                                <label
                                    className={`mt-px flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
                                        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
                                    }`}
                                    htmlFor="256gb"
                                    style={{ color: '#000', width: `${selectedStorage === '256gb' ? 'auto' : 'fit-content'}` }}
                                >
                                    {selectedStorage === '256gb' && <img src={check} alt="check" className="w-4 h-4 m-1" />}
                                    <span className="text-sm text-[#344054] font-medium mx-1">256GB</span>
                                </label>
                            </div>
                            {/* 512gb */}
                            <div className="mb-[0.125rem] block min-h-[1.5rem] relative">
                                <input
                                    className="hidden appearance-none bg-white"
                                    type="radio"
                                    name="storage"
                                    id="512gb"
                                    checked={selectedStorage === '512gb'}
                                    onChange={() => handleStorageChange('512gb')}
                                />
                                <label
                                    className={`mt-px flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
                                        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
                                    }`}
                                    htmlFor="512gb"
                                    style={{ color: '#000', width: `${selectedStorage === '256gb' ? 'auto' : 'fit-content'}` }}
                                >
                                    {selectedStorage === '512gb' && <img src={check} alt="check" className="w-4 h-4 m-1" />}
                                    <span className="text-sm text-[#344054] font-medium mx-1">512GB</span>
                                </label>
                            </div>


                            {/* 1tb */}
                            <div className="mb-[0.125rem] block min-h-[1.5rem] relative">
                                <input
                                    className="hidden appearance-none bg-white"
                                    type="radio"
                                    name="storage"
                                    id="1tb"
                                    checked={selectedStorage === '1tb'}
                                    onChange={() => handleStorageChange('1tb')}
                                />
                                <label
                                    className={`mt-px flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
                                        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
                                    }`}
                                    htmlFor="1tb"
                                    style={{ color: '#000', width: `${selectedStorage === '1tb' ? 'auto' : 'fit-content'}` }}
                                >
                                    {selectedStorage === '1tb' && <img src={check} alt="check" className="w-4 h-4 m-1" />}
                                    <span className="text-sm text-[#344054] font-medium mx-1">1TB</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">Kshs.</p>
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">92,372</p>
                    </div>
                    <div
                        className="flex w-64 justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 px-7 py-4 rounded-lg bg-[#66004b] border border-[#66004b]"
                    >
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-white">Buy Now</p>
                    </div>
                </div>
            </div>

        </div>
))}
    </>
    )

}

export default SpecialMobile;