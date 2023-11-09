import notfound from '../src/assets/Screenshot_2023-08-05_at_02_05_40-transformed 1@2x.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function NotFound() {
  return (
    <div>
      <div className='container'>
        <Navbar />
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-16 px-4 bg-white">
          <div className="flex justify-between items-center flex-grow">
            <div className="flex flex-col justify-start items-start flex-grow gap-12">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[592px] text-base font-semibold text-left text-[#f04438]">
                    404 Error
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[592px] text-5xl font-semibold text-left text-[#870064]">
                    Oops! Lost in the Aisles.
                  </p>
                </div>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[528px] text-lg text-left text-[#475467]">
                  Looks like the page is playing hide and seek. While we find it, why not explore our
                  treasure trove of goodies?
                </p>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#66004b] border border-[#66004b]">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                    Browse Our Catalog
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow relative overflow-hidden bg-white">
              <img
                src={notfound}
                className="flex-grow-0 flex-shrink-0 w-[469px] h-[482px] object-contain"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default NotFound
