import contentImage from '../../assets/Content.png';
const UnreadTable = () => {
  return (
    <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[512px] overflow-hidden gap-2.5">
      <img
        src={contentImage}
        alt="Content Image" 
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-60 h-60 gap-5 px-6 pt-6 bg-cover bg-no-repeat bg-center"
      />
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[416px] text-2xl font-semibold text-center text-[#870064]">
          You’re all caught up!
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[416px] text-sm text-center text-[#475467]">
          Check back later for new notifications.
        </p>
      </div>
    </div>
  );
}

export default UnreadTable;
