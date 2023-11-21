import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import shopping from "../../assets/shopping-cart-03.svg"
// import Selected from '../../assets/State=Selected.svg';
// import Default from '../../assets/State=Default.svg';
import { useState } from 'react';
import check from '../../assets/_Tag checkbox.svg';
import { Rate } from 'antd';
import { Share } from "./Share";
import Compare from "./Compare";
import Sliders from "./Sliders"


// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   left: number;
//   rating: number;
// }

// @ts-ignore
interface DisplayProps {
  product: any
}

const Display: React.FC<DisplayProps> = ({ product, }) => {

  //
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     name:
  //       'Mercer41 Annemargaret 90.5" Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x 35.5 D in | Wayfair',
  //     image: table,
  //     price: 92372.97,
  //     rating: 4.5,
  //     left: 25,
  //   },
  // ];

  // const product = products[0]; // Assuming you have only one item in the products array


  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const [selectedColor, setSelectedColor] = useState('graphite');
  const handleColorChange = (color: React.SetStateAction<string>) => {
    setSelectedColor(color);
  };
  const [selectedStorage, setSelectedStorage] = useState('256gb');
  const handleStorageChange = (edition: React.SetStateAction<string>) => {
    setSelectedStorage(edition);
  };

  return (
    <>   
    
      <div className="w-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 my-4 ">
        <div className="max-h-[744px] my-4 ">
        <Sliders />
        </div>
          <div className="flex flex-col max-w-[336px]  max-h-[744px] my-4 ">
            <div className="flex flex-col justify-start items-start flex-grow gap-4 ">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 pl-2.5 pr-3 py-1 rounded-2xl bg-[#fef6ee] border border-[#f9dbaf] mix-blend-multiply">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#b93815]">
                    Only 14 Left
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
                    <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                      <p className="line-clamp-3 flex-grow  text-3xl font-semibold text-left text-black">
                        {product.attributes.name}
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <Rate className='text-[#FDB022]' disabled defaultValue={product.rating} />
                      </div>
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#667085]">
                          (123.46k reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                      <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-center text-[#667085]">
                        Kshs.
                      </p>
                      <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black">
                        {product.attributes.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                  <p className="line-clamp-3 flex-grow w-80 text-sm text-left text-[#667085]">
                    {product.attributes.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-[#475467]">
                    Style
                  </p>
                </div>
                <div className="flex flex-wrap justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] pl-[5px] pr-2.5 py- rounded-md bg-white border border-[#d0d5dd]">
                    <div className=" block min-h-[1.5rem] relative ">
                      <input
                        className="hidden appearance-none bg-white"
                        type="radio"
                        name="edition"
                        id="design"
                        checked={selectedStorage === 'design'}
                        onChange={() => handleStorageChange('design')}
                      />
                      <label
                        className={`mt-px flex items-center hover:cursor-pointer bg-white]  
                          }`}
                        htmlFor="design"
                        style={{ color: '#000', width: `${selectedStorage === 'design' ? 'auto' : 'fit-content'}` }}
                      >
                        {selectedStorage === 'design' && <img src={check} alt="check" className="w-4 h-4 " />}
                        <span className="text-sm text-[#344054] font-medium mx-1">Designer Edition</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex  justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] px-1.5 rounded-md bg-white border border-[#d0d5dd]">
                    <div className="block min-h-[1.5rem] relative ">
                      <input
                        className="hidden appearance-none bg-white"
                        type="radio"
                        name="edition"
                        id="limited"
                        checked={selectedStorage === 'limited'}
                        onChange={() => handleStorageChange('limited')}
                      />
                      <label
                        className={`mt-px flex items-center hover:cursor-pointer bg-white ] 
                          }`}
                        htmlFor="limited"
                        style={{ color: '#000', width: `${selectedStorage === 'limited' ? 'auto' : 'fit-content'}` }}
                      >
                        {selectedStorage === 'limited' && <img src={check} alt="check" className="w-4 h-4 " />}
                        <span className="text-sm text-[#344054] font-medium mx-1">Limited Edition</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] px-1.5 rounded-md bg-white border border-[#d0d5dd]">
                    <div className="block relative ">
                      <input
                        className="hidden appearance-none bg-white"
                        type="radio"
                        name="edition"
                        id="special"
                        checked={selectedStorage === 'special'}
                        onChange={() => handleStorageChange('special')}
                      />
                      <label
                        className={`mt-px flex items-center hover:cursor-pointer bg-white ]
                          }`}
                        htmlFor="special"
                        style={{ color: '#000', width: `${selectedStorage === 'special' ? 'auto' : 'fit-content'}` }}
                      >
                        {selectedStorage === 'special' && <img src={check} alt="check" className="w-4 h-4" />}
                        <span className="text-sm text-[#344054] font-medium mx-1">Special Edition</span>
                      </label>
                    </div>
                  </div>
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

              <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div
                  className="flex justify-between items-center flex-grow relative overflow-hidden px-5 py-3 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}>
                  <img src={minus} onClick={handleDecrement} style={{ cursor: "pointer" }} />
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#344054]">
                    {count}
                  </p>
                  <img src={plus} onClick={handleIncrement} style={{ cursor: "pointer" }} />
                </div>
                <div
                  className="flex justify-center items-center flex-grow relative overflow-hidden gap-2  py-3 rounded-lg bg-[#fff0fb] border-0 border-[#ffb8ec]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}>
                  <img src={shopping} />
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#4d0039]">
                    Add to Cart
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full relative overflow-hidden px-5 py-3 rounded-lg bg-[#66004b] border border-[#66004b]"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                  Buy Now
                </p>
              </div>
              
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 py-4 border-t border-r-0 border-b-0 border-l-0 border-[#d0d5dd] border-dashed">
                 <Compare />
                <Share />
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Display
