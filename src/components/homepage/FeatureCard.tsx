import React from 'react';
import seat2 from '../../assets/seat2.svg';
import mobile2 from '../../assets/mobile2.svg';
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';

interface Feature {
  id: number;
  name: string;
  image: string;
  price: number;
  time: string; // Added time property
}

const FeatureCard: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      name: 'Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood',
      image: seat2,
      price: 92372.97,
      time: '2023-09-20T00:00:00',
    },
    {
      id: 2,
      name: 'At&t iPhone 13 Pro 256gb Graphite, Gray',
      image: mobile2,
      price: 54436.03,
      time: '2023-10-20T00:00:00',
    },
  ];

  return (
    <>
      <div
          style={{
            // width: 'fit-content',

          }}
        className="  items-center justify-between  grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 2xs:grid-cols-1 gap-4">
        {features.map((feature) => (
          <Link to='/detail'>
          <div
            className="myComponent max-w-[336px] gap-3 hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl">
            <div className=" h-[592px] flex flex-col justify-between items-center flex-grow-0 flex-shrink-0relative overflow-hidden pb-3 rounded-xl bg-white ">
              <div className="self-stretch flex-grow-0 flex-shrink-0 h-[336px] relative overflow-hidden">
                <img
                  src={feature.image}
                  className="h-[336px] rounded-tr-xl rounded-tl-xl absolute left-[-1px] top-[-1px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-end items-center self-stretch flex-grow-0 flex-shrink-0 h-48 gap-5 px-3">
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                  <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[310px] relative overflow-hidden">
                    <div className="line-clamp-1 flex-grow-0  text-sm  text-center text-black">
                      {feature.name}
                    </div>
                  </div>
                  <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#870064]">Kshs.</p>
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-[#870064]">
                      {feature.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-end items-center self-stretch flex-grow-0 flex-shrink-0 h-[129px] gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1 p-1">
                    <CountdownTimer time={feature.time} />
                  </div>
                  <Link to='/checkout'
                    className="myBtn flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#66004b] border border-[#66004b]"

                  >
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">
                      Add to Cart
                    </p>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;

