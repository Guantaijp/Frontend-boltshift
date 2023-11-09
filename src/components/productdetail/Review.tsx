import Content1 from '../../assets/Content.svg';
import Content2 from '../../assets/Content (1).svg';
import Content3 from '../../assets/Content (2).svg';
import Content4 from '../../assets/Content3.svg';
import thumbs from "../../assets/thumbs-down (1).svg"
import down from "../../assets/thumbs-down.svg"
import up from "../../assets/thumbs-up.svg"
import green from "../../assets/thumbs-up (1).svg"
import WriteReview from './WriteReview';
import down2 from "../../assets/chevron-down.svg"
import star from "../../assets/Star Rating.svg"
import rev1 from "../../assets/rev1.png"
import rev2 from "../../assets/rev2.png"
import rev3 from "../../assets/rev3.png"
import rev4 from "../../assets/rev4.png"
import React, { useState, useEffect } from 'react';
import "../../App.css"



interface Popular {
  id: number;
  name: string;
  image: string;
  title : string;
  content: string;
  rating: number;
  date: string;
  similarImages: string[];
}

const itemsPerPage = 2

const Review: React.FC = () => {

  const populars: Popular[] = [
    {
      id: 1,
      name: 'Paul Mbingu',
      image: Content1,
      title: 'Great Product',
      content:
          'We’ve tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team’s workflow. No matter which tools or platform are used, ProtoPie plays nice with all of them.We’ve tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team’s workflow. No matter which tools or platform are used, ProtoPie plays nice with all of them.' +
          'We’ve tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team’s workflow. No matter which tools or platform are used, ProtoPie plays nice with all of them.' +
          'We’ve tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team’s workflow. No matter which tools or platform are used, ProtoPie plays nice with all of them.' +
          'We’ve tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team’s workflow. No matter which tools or platform are used, ProtoPie plays nice with all of them.',
      rating: 5,
      date: 'Nov 26, 2023',
      similarImages: [rev1, rev1, rev1, rev1, rev1],
    },
    {
      id: 2,
      name: 'Marion Ngayi',
      image: Content2,
      title: 'Great Product',
      content:
          'My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!',
      rating: 4,
      date: 'Sep 9, 2023',
      similarImages: [rev2, rev2, rev2, rev2, rev2],
    },
    {
      id: 3,
      name: 'Wendy Hawi',
      image: Content3,
      title: 'Great Product',
      content:
          'My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!',
      rating: 4,
      date: 'Oct 12, 2023',
      similarImages: [rev3, rev3, rev3, rev3, rev3],
    },
    {
      id: 4,
      name: 'Mercy Mbingu',
      image: Content4,
      title: 'Great Product',
      content:
          'My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!.My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!',
      rating: 4,
      date: 'Feb 17, 2023',
      similarImages: [rev4, rev4, rev4, rev4, rev4],
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [liked, setLiked] = useState<Popular[]>([]);
  const [disLiked, setDisLiked] = useState<Popular[]>([]);
  const [readMoreState, setReadMoreState] = useState<{ [key: number]: boolean }>({});
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = populars.slice(startIndex, endIndex);
  const handleNextPage = () => {
    if (currentPage < Math.ceil(populars.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLike = (popular: Popular) => {
    if (liked.some((item) => item.id === popular.id)) {
      setLiked(liked.filter((item) => item.id !== popular.id)); // Unlike if already liked
    } else {
      setLiked([...liked, popular]); // Like if not already liked
      setDisLiked(disLiked.filter((item) => item.id !== popular.id)); // Ensure only one option is selected
    }
  };

  const handleDisLike = (popular: Popular) => {
    if (disLiked.some((item) => item.id === popular.id)) {
      setDisLiked(disLiked.filter((item) => item.id !== popular.id)); // Undislike if already disliked
    } else {
      setDisLiked([...disLiked, popular]); // Dislike if not already disliked
      setLiked(liked.filter((item) => item.id !== popular.id)); // Ensure only one option is selected
    }
  };
  const toggleReadMore = (id: number) => {
    const updatedReadMoreState = { ...readMoreState };
    updatedReadMoreState[id] = !updatedReadMoreState[id];
    setReadMoreState(updatedReadMoreState);
  };

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const maxItemsToShow = isSmallScreen ? 3 : 4; // Define the maximum number of items to show for each screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const displayedImages = populars.slice(0, maxItemsToShow);

  return (
      <>
        <div className=" max-w-[1216px] flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-5 px-10 py-12 rounded-xl bg-gradient-to-b from-gray-50 to-[#edf0f3] border border-white">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-[#66004b]">
              Reviews
            </p>
          </div>
          <div className="flex flex-wrap justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-4 pr-8 py-4">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-6xl font-bold text-center text-[#66004b]">
                  4.1
                </p>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    {/*<Rate  className='text-[#FDB022]' disabled defaultValue={4} />*/}
                  </div>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-1">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#66004b]">
                      123.46k reviews
                    </p>
                  </div>
                </div>
              </div>
              <WriteReview  />

            </div>
            <div className="flex flex-col max-w-[250px] justify-start items-start flex-grow overflow-hidden gap-2 pr-8 py-4">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 pr-4">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-1">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#66004b]">
                      5
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <img src={star} alt=""  />
                  </div>
                </div>
                <div className="w-[110px] justify-start items-start relative overlow-hidden rounded-lg bg-[#ffb8ec]">
                  <div className="bg-[#870064] h-1 rounded-full" style={{ width: 40 }}></div>
                </div>
                <p className="text-start flex-grow-0 flex-shrink-0 text-sm font-medium  text-[#870064]">12k
                </p>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 pr-4">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0  relative gap-2 px-1">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#66004b]">
                      4
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <img src={star} alt=""  />
                  </div>
                </div>
                <div className="border w-[110px] justify-start items-start relative overlow-hidden rounded-lg bg-[#ffb8ec]">
                  <div className="bg-[#870064] h-1 rounded-full" style={{ width: 40 }}></div>
                </div>
                <p className="text-start flex-grow-0 flex-shrink-0 text-sm font-medium  text-[#870064]">12k
                </p>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 pr-4">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0  relative gap-2 px-1">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#66004b]">
                      3
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <img src={star} alt=""  />
                  </div>
                </div>
                <div className="border w-[110px] justify-start items-start relative overlow-hidden rounded-lg bg-[#ffb8ec]">
                  <div className="bg-[#870064] h-1 rounded-full" style={{ width: 60 }}></div>
                </div>
                <p className="text-start flex-grow-0 flex-shrink-0 text-sm font-medium  text-[#870064]">2.3k
                </p>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 pr-4">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0  relative gap-2 px-1">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#66004b]">
                      2
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <img src={star} alt=""  />
                  </div>
                </div>

                <div className="w-[110px] justify-start items-start relative overlow-hidden rounded-lg bg-[#ffb8ec]">
                  <div className="bg-[#870064] h-1 rounded-full" style={{ width: 40 }}></div>
                </div>
                <p className="text-start flex-grow-0 flex-shrink-0 text-sm font-medium  text-[#870064]">2.1k
                </p>

              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 pr-4">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0  relative gap-2 px-1.5">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#66004b]">
                      1
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <img src={star} alt=""  />
                  </div>
                </div>
                <div className="border w-[110px] justify-start items-start relative overlow-hidden rounded-lg bg-[#ffb8ec]">
                  <div className="bg-[#870064] h-1 rounded-full" style={{ width: 20 }}></div>
                </div>
                <p className="text-start flex-grow-0 flex-shrink-0 text-sm font-medium  text-[#870064]">72
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {displayedItems.map((popular) =>
              <div  className=" max-w-[1216px]  flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-5 py-8 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div key={popular.id} className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                  <img src={popular.image} alt="Bardge" className="flex-grow-0 flex-shrink-0 w-[72px] h-[72px] relative" />
                  <div className="flex flex-col justify-end items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
                    <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#344054]">
                        {popular.name}
                      </p>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 pl-1.5 pr-2 py-0.5 rounded-2xl bg-[#ecfdf3] border border-[#abefc6] mix-blend-multiply">
                        <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#17B26A"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#067647]">
                          Verified Buyer
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-1">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#667085]">Nov 26, 2023</p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        {/*<Rate className='text-[#FDB022] text-sm' disabled defaultValue={popular.rating}  />*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-1">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#0c111d]">
                      {popular.title}
                    </p>
                  </div>

                  <div key={popular.id}>
                    <p className="text ">
                      {readMoreState[popular.id] ? popular.content : popular.content.slice(0, 350)}
                      <span className="read-or-hide">
                      {readMoreState[popular.id] ? (
                  <div className="flex mt-3">
                    <p onClick={() => toggleReadMore(popular.id)}
                        className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#475467]">
                      Show Less
                    </p>
                    <img src={down2} alt="down" />
                  </div>
                  ) : (
                  <div className="flex mt-3">
                    <p
                        onClick={() => toggleReadMore(popular.id)}
                        className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#475467]"
                    >
                      Show more
                    </p>
                    <img src={down2} alt="down" />
                  </div>
                   )}
            </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-3">
                  {displayedImages.map(({ similarImages }) => (
                      <div
                          key={similarImages[0]}
                          className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-24 w-24 xs:w-20 xs:h-20 relative overflow-hidden gap-5 rounded-xl bg-white border border-[#eaecf0]">
                        <img src={
                          similarImages[0]
                        } alt="product" className="self-stretch flex-grow object-contain" />
                      </div>
                  ))}
                </div>
                <div className=" max-w-[400px] flex-wrap  flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 ">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#0c111d]">
                      Was this review helpful?
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4 hover:cursor-pointer ">
                    <div key={popular.id} className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1.5 hover:bg-[#DCFAE6] hover:rounded-xl">
                      {liked.some((item) => item.id === popular.id) ? ( // Check if the item is liked
                          <img src={green} alt="Liked" onClick={() => handleLike(popular)} />

                      ) : (
                          <img src={up} alt="Like"  onClick={() => handleLike(popular)} />
                      )}
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
                        Yes
                      </p>
                    </div>
                    <div key={popular.id} className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2  p-1.5 hover:bg-[#FEE4E2] hover:rounded-xl">
                      {/* <img src={down}/> */}
                      {disLiked.some((item) => item.id === popular.id) ? ( // Check if the item is liked
                          <img src={thumbs} alt="Like" onClick={() => handleDisLike(popular)} />
                      ) : (
                          <img src={down} alt="DisLike" onClick={() => handleDisLike(popular)} />
                      )}
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">No</p>
                    </div>
                  </div>
                </div>
              </div>
          )}
          <div >
            {populars.length > itemsPerPage && (
                <div className="flex justify-between my-6 mx-5">
                  <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 px-3 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                        preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                          d="M15.8332 9.99996H4.1665M4.1665 9.99996L9.99984 15.8333M4.1665 9.99996L9.99984 4.16663"
                          stroke="#344054"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      ></path>
                    </svg>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-0.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#344054]">Previous</p>
                    </div>
                  </button>
                  <div className="flex justify-center items-center w-10 h-10 relative p-2 rounded-[20px]">
                    {Array.from({ length: Math.ceil(populars.length / itemsPerPage) }).map((_, index) => (
                        <p className="flex justify-center items-center w-10 h-10 relative p-2 rounded-[20px] flex-shrink-0 text-sm font-medium text-center text-[#182230]">
                          {index + 1}
                        </p>
                    ))}
                  </div>

                  <button
                      onClick={handleNextPage}
                      disabled={currentPage === Math.ceil(populars.length / itemsPerPage)}
                      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 px-3 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  >
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-0.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#344054]">Next</p>
                    </div>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                        preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                          d="M4.1665 9.99996H15.8332M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333"
                          stroke="#344054"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
            )}
          </div>
        </div>
        {/* third part */}
      </>
  )}
export default Review