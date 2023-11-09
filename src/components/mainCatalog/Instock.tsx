import * as Switch from '@radix-ui/react-switch';

function Instock() {
  return (
    <div className="ml-2 my-2 flex justify-between items-center" style={{ display: 'flex', alignItems: 'center' }}>
      <label className=" text-xl font-semibold text-left text-[#0c111d]" htmlFor="airplane-mode">
        Only in Stock
      </label>
    
       <Switch.Root
        className="w-9 h-5  rounded-full relative  data-[state=checked]:bg-[#079455]  outline-none cursor-default none bg-[#d0d5dd] "
        id="airplane-mode"
        
      >
        <Switch.Thumb className="block w-4 h-4 bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  );
}

export default Instock;
