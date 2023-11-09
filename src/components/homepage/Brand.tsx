
import lable from '../../assets/Sparkles.svg'
import BrandCard from './BrandCard'
function Brand() {
  return (
    <div className="px-8 my-6">
      <div className="flex ">
        <img src={lable} alt="Special Offer" />
        <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center mt-2 text-black">
          Featured Brands
        </p>
      </div>
      <div className="justify-center items-center 2xl:flex xl:flex lg:flex gap-2 my-8">
        <div className="max-w-[512px] min-w-[336px] flex justify-center items-center flex-grow h-[512px] overflow-hidden rounded-xl bg-gray-50 border border-[#f2f4f7]">
          <div className="flex flex-col justify-center items-center flex-grow h-[310px] gap-16 py-6 ">
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-64 relative gap-2">
                <svg
                  width={72}
                  height={72}
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[72px] h-[72px] relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_2710_43131)">
                    <path
                      d="M71.2988 36.8295C71.2988 34.3823 71.1003 31.9219 70.677 29.5144H36.7207V43.3773H56.1659C55.359 47.8484 52.7663 51.8036 48.9699 54.3169V63.3119H60.5708C67.3833 57.0419 71.2988 47.7823 71.2988 36.8295Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M36.7203 72.0025C46.4297 72.0025 54.6178 68.8145 60.5836 63.3117L48.9827 54.3166C45.755 56.5125 41.5882 57.7559 36.7335 57.7559C27.3417 57.7559 19.3784 51.4197 16.5211 42.9009H4.5498V52.1737C10.6611 64.3302 23.1087 72.0025 36.7203 72.0025V72.0025Z"
                      fill="#34A853"
                    />
                    <path
                      d="M16.5083 42.9006C15.0003 38.4296 15.0003 33.5881 16.5083 29.1171V19.8442H4.55021C-0.555799 30.0166 -0.555799 42.0011 4.55021 52.1735L16.5083 42.9006V42.9006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M36.7203 14.249C41.8528 14.1696 46.8133 16.1009 50.5303 19.646L60.8085 9.36785C54.3003 3.25651 45.6624 -0.103398 36.7203 0.002426C23.1087 0.002426 10.6611 7.67467 4.5498 19.8444L16.5079 29.1173C19.3519 20.5852 27.3284 14.249 36.7203 14.249V14.249Z"
                      fill="#EA4335"
                    />
                  </g>

                </svg>
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-[#0c111d]">
                    Google
                  </p>
                </div>
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-64 text-sm font-medium text-center text-[#667085]" >
                  {"Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.".length > 98 ?
                    `${"Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.".slice(0, 98)}...` : "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics."}
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 px-7 py-4 rounded-lg">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#475467]">
                  More Details
                </p>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#475467"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

          <BrandCard />
      </div>
    </div>
  )
}

export default Brand
