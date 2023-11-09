// import { Rate } from 'antd';
import Content1 from '../../assets/Content.svg';
import Content2 from '../../assets/Content (1).svg';
import Content3 from '../../assets/Content (2).svg';
import Content4 from '../../assets/Content3.svg';

interface Popular {
  id: number;
  name: string;
  image: string;
  content: string;
  rating: number;
  date: string;
}

const PopularCard: React.FC = () => {
  const populars: Popular[] = [
    {
      id: 1,
      name: 'Paul Mbingu',
      image: Content1,
      content:
          "We’ve tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team’s workflow. No matter which tools or platform are being used, we can import our design assets in seconds and make awesome code-free prototypes in minutes.",
      rating: 5,
      date: 'Nov 26, 2023',
    },
    {
      id: 2,
      name: 'Marion Ngayi',
      image: Content2,
      content:
        'My season is shifting. Thank You, Jesus. God is preparing me for greater purpose & effectiveness! Amen!',
      rating: 4,
      date: 'Sep 9, 2023',
    },
    {
      id: 3,
      name: 'Wendy Hawi',
      image: Content3,
      content:
        "Philips Hue light bulbs are like having a personal sunrise simulator in your home. They're so bright and cheerful, they make me feel like I'm waking up on a tropical island instead of in my apartment. And if I ever need to set the mood for a romantic evening, I just dim those bad boys down low and boom! Instant ambience. My only complaint is that they're not great for taking selfies, but I guess you can't have everything.",
      rating: 4,
      date: 'Oct 12, 2023',
    },
    {
      id: 4,
      name: 'Mercy Mbingu',
      image: Content4,
      content:
        'Ever since I went to a large electronics retail store near me to get something totally different than these bulbs and saw the Philips Hue demonstrated in concert with what I was looking for, I was hooked on them. I have them throughout my home and have them in my office at work. I have about 30 of them in my house and 10 of them in my office. To say the least, I am more than satisfied with the Philips Hue products.',
      rating: 4,
      date: 'Feb 17, 2023',
    },
  ];



  return (

<>
  <div className=" grid 2xl:grid-cols-4 xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 2xs:grid-cols-1  gap-2 my-8">
    {populars.map((popular) => (
<div className="max-w-[288px] min-w-auto max-h-[224px] min-h-auto flex  flex-col justify-between pb-3 rounded-xl bg-gradient-to-b from-white to-neutral-100 border border-[#eaecf0] p-2">
  <div className="flex   relative gap-2">
   <img src={popular.image} alt="Bardge" className="" />
    <div className="flex flex-col gap-1">
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
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 ">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-1">
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#667085]"> {popular.date}</p>
        </div>

        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">

          {/*<Rate disabled defaultValue={popular.rating} className="text-sm text-[#FDB022]" />*/}
        </div>
      </div>
    </div>
  </div>

  <p className="px-2.5 line-clamp-5 flex-grow  text-xs text-left text-[#4d0039]" style={{ lineHeight: '1.3', maxHeight: '7.3em', overflow: 'hidden' }}>
  {popular.content}
  </p>

</div>
  ))}
</div>
</>
  
  )
};

export default PopularCard;
