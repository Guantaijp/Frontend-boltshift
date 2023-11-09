import React, { useState } from 'react';
import lable from '../../assets/Label.svg';
import iphone from '../../assets/iphone.svg';
import SpecialTimer from './SpecialTimer';
import check from '../../assets/_Tag checkbox.svg';
import { Link } from 'react-router-dom';

function SpecialOffer() {

  const [selectedColor, setSelectedColor] = useState('graphite');
  const [selectedStorage, setSelectedStorage] = useState('256gb');

  const handleColorChange = (color: React.SetStateAction<string>) => {
    setSelectedColor(color);
  };

  const handleStorageChange = (storage: React.SetStateAction<string>) => {
    setSelectedStorage(storage);
  };

  return (
    <div className='mx-8 xs:hidden sm:hidden   '>
      <div className="flex ">
        <img src={lable} alt="Special Offer" />
        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center mt-2 text-black">
            Special Offer
          </p>
      </div>
      
      <div className=" flex flex-col md:flex-row md:my-2 py-12 ">

 <div className=" flex flex-grow-0 flex-shrink-0 gap-12">
  <div className="md:flex-col max-w-[688px] min-w-[336px] flex items-center rounded-xl bg-white border border-[#eaecf0]">
    <div className=" rounded-tl-xl  w-64 rounded-bl-xl justify-center items-center  h-[592px] bg-white">
      <img
        src={iphone}
        className=" h-[592px] object-cover"
      />
    </div>
    <div className=" mx-auto flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10 py-6">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-3">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-[#f04438]">
            NEW 2022
          </p>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative">

       <div className="self-stretch flex-grow-0 flex-shrink-0 w-64 text-xl font-semibold text-center text-black" >
  { "Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood".length > 44 ? `${"Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood".slice(0, 45)}...` : "Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood"}
</div>
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
          { "Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood".length > 18 ? `${"Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood".slice(0, 74)}...` : "Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood"}
          </p>
        </div>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1 p-1">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1 p-1">
        <SpecialTimer />
      </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className=" w-[336px] flex flex-col justify-start items-start flex-grow h-[592px] gap-10 px-4">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
      <div className="flex w-[304px] justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
        <p className=" flex-grow text-3xl font-semibold text-left text-black">
          At&amp;t iPhone 13 Pro 256gb Graphite, Gray
        </p>
      </div>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
        <p className=" w-[304px] flex-grow-0 flex-shrink-0  text-sm text-left text-[#667085]">
          TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2
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
      className={`py-0.5 flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
      }`}
      htmlFor="128gb"
      style={{ color: '#000', width: `${selectedStorage === '128gb' ? 'auto' : 'fit-content'}` }}
    >
      {selectedStorage === '128gb' && <img src={check} alt="check" className="w-4 h-4 mx-1" />}
      <span className="text-sm text-[#344054] font-medium mx-1 ">128GB</span>
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
      className={`py-0.5 flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
      }`}
      htmlFor="256gb"
      style={{ color: '#000', width: `${selectedStorage === '256gb' ? 'auto' : 'fit-content'}` }}
    >
      {selectedStorage === '256gb' && <img src={check} alt="check" className="w-4 h-4 mx-1" />}
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
      className={`py-0.5 flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
      }`}
      htmlFor="512gb"
      style={{ color: '#000', width: `${selectedStorage === '256gb' ? 'auto' : 'fit-content'}` }}
    >
      {selectedStorage === '512gb' && <img src={check} alt="check" className="w-4 h-4 mx-1" />}
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
      className={`py-0.5 flex items-center hover:cursor-pointer bg-white rounded border border-[#d0d5dd] ${
        selectedStorage === '256gb' ? 'border border-[#d0d5dd]' : 'border border-[#d0d5dd] border-opacity-50'
      }`}
      htmlFor="1tb"
      style={{ color: '#000', width: `${selectedStorage === '1tb' ? 'auto' : 'fit-content'}` }}
    >
      {selectedStorage === '1tb' && <img src={check} alt="check" className="w-4 h-4 mx-1" />}
      <span className="text-sm text-[#344054] font-medium mx-1">1TB</span>
    </label>
  </div>
      </div>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
      <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">Kshs.</p>
      <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
        92372.97
      </p>
    </div>
    <Link
  to="/checkout"
  className="max-w-[320px] flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 px-7 py-4 rounded-lg border border-[#66004b] bg-[#66004b] shadow-md min-w-[20rem]  self-stretch"
>
  <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-white">
    Buy Now
  </p>
</Link>
  </div>
</div>
      </div>
    </div>
  );
}

export default SpecialOffer;
