
function SectionPrice() {

  return (
    <>
      <div className="my-2 flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2 px-4">
        <div className="flex  flex-col justify-start items-start flex-grow relative gap-1.5">
          <div className="flex flex-col justify-start items-start flex-grow relative gap-1.5">
           <label className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054] ">Min</label>
            <input
              className=" appearance-none border border-[#d0d5dd] rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none "
              id="inputField"
              type="number"
              placeholder="Ksh"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 p-1 rounded-lg">
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
              d="M4.16675 10H15.8334"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow relative gap-1.5">
          <label className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054] ">Max</label>
          <input
            className=" appearance-none border border-[#d0d5dd] rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none "
            id="inputField"
            type="number"
            placeholder="Ksh"
          />
        </div>
      </div>
    </>
  );
}

export default SectionPrice;
