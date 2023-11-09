
interface Description {
    id: number;
    name: string;
    description: string[]
    details: string[];
    }

const Description: React.FC = () => {
    const descriptions: Description[] = [
        {
            id: 1,
            name: "Movado",
            description: [
            ],
            details: [
              "Package Dimensions ‏ : ‎ 6.46 x 5.47 x 4.06 inches; 11.36 Ounces",
              "Item model number ‏ : ‎ 3600915",
              "Department ‏ : ‎ mens",
              "Date First Available ‏ : ‎ July 22, 2022",
              "Manufacturer ‏ : ‎ Movado",
              "ASIN ‏ : ‎ B0B7CCJFC1",
              "Country of Origin ‏ : ‎ Switzerland",
              "Best Sellers Rank: #226,443 in Clothing, Shoes & Jewelry",
            ]
        },
      ];
      const description = descriptions[0];

      const parsedDetails = description.details.map((detail) => {
        const [key, value] = detail.split(" : ");
        return { key, value };
      });

  return (
    <div>
      <div className="max-w-[512px] flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10 py-12 bg-white">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 bg-white">
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
            Description
          </p>
        </div>
  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
    <p className="flex-grow  text-sm text-left text-[#475467]">
      <span className=" py-2 flex-grow  text-sm text-left text-[#475467]">
        Since 1881, Movado has been a brand in motion – always changing, always innovating, always
        moving forward. This quest for innovation has made us one of the world’s premier
        watchmakers, with a proud heritage of Swiss craftsmanship, design excellence, and
        technological innovation.
      </span>
      <br />
      <div className="mx-2 mt-3">
      <span className="flex-grow  text-sm font-semibold text-left text-[#475467]">
         Contemporary Chic:
      </span>
      <span className="flex-grow  text-sm text-left text-[#475467]">
        {" "}
        Sleek ceramic and sparkling crystals define this modern must have timepiece.
      </span>
      <br />
      <span className="flex-grow text-sm font-semibold text-left text-[#475467]">
        Modern Designed:
      </span>
      <span className="flex-grow  text-sm text-left text-[#475467]">
        {" "}
        Women's Movado Bold, stainless steel case with crystals, silver-toned metallic Museum dial
        with crystal set dot, blush ceramic and stainless steel link bracelet.
      </span>
      <br />
      <span className="flex-grow  text-sm font-semibold text-left text-[#475467]">
        Swiss Quartz Accuracy:
      </span>
      <span className="flex-grow  text-sm text-left text-[#475467]">
        {" "}
        Swiss quartz movement provides incredibly precise timekeeping, superior craftsmanship and
        minimal maintenance for a reliable and worry-free timepiece.
      </span>
      <br />
      <span className="flex-grow  text-sm font-semibold text-left text-[#475467]">
        K1 Mineral Crystal Glass:{" "}
      </span>
      <span className="flex-grow  text-sm text-left text-[#475467]">
        K1 mineral crystal is the most common crystal used in designer watches and more
        scratch-resistant than regular mineral crystal—and is even more shatter-resistant than
        sapphire crystal.
      </span>
      <br />
      <span className="flex-grow  text-sm font-semibold text-left text-[#475467]">
        Caring for Your Timepiece:
      </span>
      <span className="flex-grow  text-sm text-left text-[#475467]">
        {" "}
        Like any finely crafted mechanism, your Movado watch requires periodic maintenance to ensure
        optimal performance. A maintenance interval of 3 to 5 years is recommended, in addition to
        any required battery replacement. Never open the watch yourself.
      </span>
      </div>
    </p>
  </div>
</div>
{/* product details  */}
<div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10 py-12 bg-white">
  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1 bg-white">
    <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
      Product Details
    </p>
  </div>
  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
  <p className="flex-grow text-sm text-left text-[#475467]">
    {parsedDetails.map((detail, index) => (
      <div key={index} className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
        <span className="flex-grow  text-sm text-left text-[#475467]">
          <span className=" text-sm font-semibold text-left text-[#475467]"><span className='bold'>.</span>{detail.key}:</span> <span className="text-sm text-left text-[#475467]">{detail.value}</span>
        </span>
      </div>
    ))}
  </p>
</div>
  </div>
</div>

   
  )
}

export default Description
