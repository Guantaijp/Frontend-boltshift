import React, { useEffect, useState } from 'react'
import fire2 from '../../assets/1F525_Fire_v13_Still 1.svg';
import Selected from '../../assets/State=Selected.svg';
import Default from '../../assets/State=Default.svg';
import { Link } from 'react-router-dom';
import {getProductAsyc} from '../../store/reducers/products.reducer.ts'
import { useDispatch, useSelector } from "react-redux";


const HotedealCard: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state:any) => state.products.products);

    const fetchData = async () => {
      const response = await dispatch(getProductAsyc() as any);
      console.log(response)
    }

    useEffect(() => {
      fetchData();
    }, []);

  const hotDealTodayData = products.filter((item:any) => {
    return item.attributes.sub_category.data.attributes.name === "hotDealToday";
  });

  console.log(hotDealTodayData);



  const [selectedItems, setSelectedItems] = useState([]);
  const handleImageClick = (deal:any) => {
    const isItemSelected = selectedItems.some((item) => item === deal.id);
    if (isItemSelected) {
      // Item is already selected, remove it from the selection
      setSelectedItems(selectedItems.filter((item) => item !== deal.id));
    } else {
      // Item is not selected, add it to the selection
      // @ts-ignore
      setSelectedItems([...selectedItems, deal]);
    }
  };

  return (
      <div style={{maxWidth: '1248px',}} className="px-4 gap-4 justify-center items-center grid 2xl:grid-cols-7 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 sm:gap-3 xs:grid-cols-2 xs:gap-3 2xs:grid-cols-1 my-8">

      {hotDealTodayData .map((deal:any) => (
        <Link to={`/detail/${deal.id}`}>
        <div className= " myComponent max-w-[160px] min-w-[135px]  hover:bg-gradient-to-r from-[#F6CEEC] to-[#D939cd] p-0.5 hover:rounded-2xl border border-[#eaecf0] rounded-xl">
          <div className=" flex flex-col justify-between items-center  rounded-xl flex-grow-0 flex-shrink-0 h-72 relative overflow-hidden pb-3 bg-white">
            <div className="self-stretch flex-grow-0 rounded-tr-xl rounded-tl-xl flex-shrink-0 h-40 relative overflow-hidden bg-[#d0d5dd]">

              <div className=" relative m-0 p-0">
                {selectedItems.some((item) => item === deal.id) ? (
                  <img
                    src={Selected}
                    alt="Selected"
                    className="absolute top-2 right-2  cursor-pointer"
                    onClick={() => handleImageClick(deal)}
                  />
                ) : (
                  <img
                    src={Default}
                    alt="Default"
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleImageClick(deal)}
                  />
                )}
                <img
                      src={`http://localhost:1337${deal.attributes.image.data.attributes.formats.thumbnail.url}`}
                    alt=""
                    className="h-40 w-full rounded-tr-xl rounded-tl-xl left-[-1px] top-[-1px] object-cover"
                />
              </div>

            </div>
            <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 gap-1 px-3">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden">
                  <div className="line-clamp-1 flex-grow text-xs font-medium text-left text-black">
                    {deal.attributes.name}
                  </div>

                </div>
                <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#870064]">Kshs.</p>
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#870064]">
                    {deal.attributes.price}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
                <div className="flex justify-start items-start flex-grow relative overflow-hidden rounded-lg bg-[#ffb8ec]">
                  <div className="bg-[#870064] h-1 rounded-full" style={{ width: `${deal.attributes.leftItems}%` }}></div>
                </div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative overflow-hidden">
                    <img
                      src={fire2}
                      className="w-4 h-4 absolute left-[-0.52px] top-[-0.52px] object-cover"
                    />
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#870064]">{deal.attributes.leftItems}</p>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#870064]"> Left</p>
                </div>
              </div>

              <Link to='/checkout'
                className="myBtn flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                // style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                  Add to Cart
                </p>
              </Link>

            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-28 top-0 gap-2 p-2">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="none"
              >
                <g filter="url(#filter0_b_2633_36297)">
                  <g filter="url(#filter1_b_2633_36297)">
                    <rect width={32} height={32} rx={16} fill="#F9FAFB" />
                    <path
                      d="M18.7409 10C21.0891 10 22.6668 12.235 22.6668 14.32C22.6668 18.5425 16.1187 22 16.0002 22C15.8816 22 9.3335 18.5425 9.3335 14.32C9.3335 12.235 10.9113 10 13.2594 10C14.6076 10 15.4891 10.6825 16.0002 11.2825C16.5113 10.6825 17.3928 10 18.7409 10Z"
                      stroke="#66004B"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_b_2633_36297"
                    x={-40}
                    y={-40}
                    width={112}
                    height={112}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >

                  </filter>
                  <filter
                    id="filter1_b_2633_36297"
                    x={-40}
                    y={-40}
                    width={112}
                    height={112}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >

                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        </Link>
      ))}

    </div>

  );
};

export default HotedealCard;
