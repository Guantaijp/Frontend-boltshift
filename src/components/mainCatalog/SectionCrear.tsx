
function SectionCrear() {
  return (
    <div  >
      <div
        className="flex mt-5 justify-center items-center self-stretch hover:bg-[#FFF0FB] flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-lg bg-[#fef3f2] border border-[#fecdca]"
        style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
      >
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
            d="M14.1666 5.83337L5.83325 14.1667M5.83325 5.83337L14.1666 14.1667"
            stroke="#B42318"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#b42318]">
          Clear All Filters
        </p>
      </div>
    </div>
  )
}

export default SectionCrear
