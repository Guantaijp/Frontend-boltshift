import { useState } from 'react';
import { Modal } from 'antd';
import circle from "../../assets/plus-circle.svg"
import featured from "../../assets/Featured icon.svg"
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import shopping from "../../assets/shopping-cart-03.svg"
interface Compare {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const Compare: React.FC = () => {
  const compare: Compare[] = [
    {
      id: 1,
      name: 'Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2',
      image: product1,
      price: 63073,
      description: 'Over cobble stone, through sandy washes, across arid stretches peppered with cacti, this race puts car and driver to the ultimate test. We built a watch to track their progress.',
    },
    {
      id: 2,
      name: 'Mercer41 Annemargaret 90.5" Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x 35.5 D in | Wayfair',
      image: product3,
      price: 80020,
      description: 'Over cobble stone, through sandy washes, across arid stretches peppered with cacti, this race puts car and driver to the ultimate test. We built a watch to track their progress.'
    },
    {
      id: 3,
      name: 'Turin Modern Coffee Tables 14.57"D+17.72"D',
      image: product2,
      price: 70977,
      description: 'Over cobble stone, through sandy washes, across arid stretches peppered with cacti, this race puts car and driver to the ultimate test. We built a watch to track their progress.'
    }
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
    return (
      <>
        <img src={circle} onClick={showModal} />
        <Modal title={
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
            <img src={featured} />
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[153px] text-lg font-semibold text-left text-[#101828]">
                Compare Product
              </p>
            </div>
          </div>
        }
        visible={isModalOpen} onCancel={handleCancel} width={950} footer={null}   className="max-w-[80%] min-w-[300px]"
        >
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            {compare.map((compares) => (

              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-72 relative overflow-hidden rounded-xl bg-white border-0 border-[#eaecf0]"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <div className="self-stretch flex-grow-0 flex-shrink-0 h-72 relative overflow-hidden bg-[#d0d5dd]">
                  <img
                    src={compares.image}
                    className="w-72 h-72 absolute left-[-1px] top-[-1px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 px-4 pt-6 pb-12">
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 pl-1.5 pr-2 py-0.5 rounded-2xl bg-[#fef6ee] border border-[#f9dbaf] mix-blend-multiply">
                      <svg
                        width={8}
                        height={8}
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <circle cx={4} cy={4} r={3} fill="#EF6820" />
                      </svg>
                      <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#b93815]">
                        Only 14 Left
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
                        <div className="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                          <p className="flex-grow w-64 text-2xl font-semibold text-left text-black">
                            {compares.name.length > 28 ? `${compares.name.slice(0, 28)}...` : compares.name}
                          </p>
                        </div>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                              preserveAspectRatio="none"
                            >
                              <g clip-path="url(#clip0_3978_20384)">
                                <path
                                  d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                  fill="#F2F4F7"
                                />
                                <g clip-path="url(#clip1_3978_20384)">
                                  <path
                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                    fill="#FDB022"
                                  />
                                </g>
                              </g>
                            </svg>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                              preserveAspectRatio="none"
                            >
                              <g clip-path="url(#clip0_3978_20388)">
                                <path
                                  d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                  fill="#F2F4F7"
                                />
                                <g clip-path="url(#clip1_3978_20388)">
                                  <path
                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                    fill="#FDB022"
                                  />
                                </g>
                              </g>
                            </svg>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                              preserveAspectRatio="none"
                            >
                              <g clip-path="url(#clip0_3978_20392)">
                                <path
                                  d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                  fill="#F2F4F7"
                                />
                                <g clip-path="url(#clip1_3978_20392)">
                                  <path
                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                    fill="#FDB022"
                                  />
                                </g>
                              </g>
                            </svg>

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
                          <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-[#667085]">
                            Kshs.
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-center text-black">
                            {compares.price}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
                      <p className="flex-grow w-64 text-xs text-left text-[#667085]">
                        {compares.description.length > 135 ? `${compares.description.slice(0, 135)}...` : compares.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                      <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-[#475467]">
                        Style
                      </p>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] pl-1 pr-[9px] py-0.5 rounded-md bg-white border border-[#d0d5dd]">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">

                          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
                            Designer Edition
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3px] px-[9px] py-0.5 rounded-md bg-white border border-[#d0d5dd]">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
                            Limited Edition
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center flex-row items-center flex-grow-0 flex-shrink-0 gap-[3px] px-[9px] py-0.5 rounded-md bg-white border border-[#d0d5dd]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
                          Factory Edition
                        </p>
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
                      <div className=" block min-h-[1.5rem] pl-[1.5rem]">
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

                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">

                    <div
                      className="flex justify-between items-center flex-grow relative overflow-hidden px-2 py-3 rounded-lg bg-white border border-[#d0d5dd]"
                      style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                    >
                      <img src={minus} onClick={handleDecrement} style={{ cursor: "pointer" }} />
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#344054]">
                        {count}
                      </p>
                      <img src={plus} onClick={handleIncrement} style={{ cursor: "pointer" }} />
                    </div>
                    <div
                      className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#fff0fb] border-0 border-[#ffb8ec]"
                      style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                    >

                      <img src={shopping} />

                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#4d0039]">
                        Add to Cart
                      </p>
                    </div>

                  </div>
                  <div
                    className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-64 relative overflow-hidden gap-2 px-4 py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]"
                    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-white">
                      Buy Now
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      </>
    )
  }

  export default Compare
